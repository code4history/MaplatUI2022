import { match } from "ts-pattern";
import Hammer from "hammerjs";
import style from "../../maplat.scss";

interface DrawerOption {
  drawerElement: HTMLElement;
  onOpen?: () => void;
  onClose?: () => void;
}

type Position = "VIEWED" | "PEEKING" | "HIDE" | "FREE";
type ExcludeFreePosition = Exclude<Position, "FREE">;
const DEFAULT_PEEKIN_Y_POSITION = 275;
const Y_POSITION: Record<Position, number> = {
  FREE: -1000,
  VIEWED: 0,
  PEEKING: DEFAULT_PEEKIN_Y_POSITION,
  HIDE: 593,
};

let currentYPosition: Position = "PEEKING";
let currentDeltaY: number = Y_POSITION[currentYPosition];

const resetYPosition = (drawerElement: DrawerOption["drawerElement"]) => {
  currentYPosition = "PEEKING";
  currentDeltaY = DEFAULT_PEEKIN_Y_POSITION;
  drawerElement.style.transform = `translate3d(0, ${currentDeltaY}px, 0)`;
};

const swipeYPositionToTop = (current: Position): ExcludeFreePosition => {
  return match<Position, ExcludeFreePosition>(current)
    .with("VIEWED", () => "VIEWED")
    .with("PEEKING", () => "VIEWED")
    .with("HIDE", () => "PEEKING")
    .with("FREE", () => {
      if (currentDeltaY < Y_POSITION.HIDE) return "PEEKING";
      if (currentDeltaY < Y_POSITION.PEEKING) return "VIEWED";
      return "VIEWED";
    })
    .exhaustive();
};

const swipeYPositionToBottom = (current: Position): ExcludeFreePosition => {
  return match<Position, ExcludeFreePosition>(current)
    .with("VIEWED", () => "PEEKING")
    .with("PEEKING", () => "HIDE")
    .with("HIDE", () => "HIDE")
    .with("FREE", () => {
      if (currentDeltaY < Y_POSITION.PEEKING) return "PEEKING";
      if (currentDeltaY < Y_POSITION.HIDE) return "HIDE";
      return "HIDE";
    })
    .exhaustive();
};

export const drawer = ({ drawerElement, onOpen, onClose }: DrawerOption) => {
  const open = () => {
    drawerElement.classList.remove(style["drawer-close"]);
    if (onOpen) onOpen();
  };
  const close = () => {
    drawerElement.classList.add(style["drawer-close"]);
    resetYPosition(drawerElement);
    if (onClose) onClose();
  };
  close();
  const bar = drawerElement.querySelector<HTMLElement>(
    "." + style["drawer-bar"]
  );
  if (!bar) throw new Error(".drawer-bar is not exist");
  const header = drawerElement.querySelector<HTMLElement>(
    "." + style["drawer-header"]
  );
  if (!header) throw new Error(".drawer-header is not exist");

  const main = drawerElement.querySelector<HTMLElement>(
    "." + style["drawer-main"]
  );
  if (!main) throw new Error(".drawer-main is not exist");

  const closeButton = drawerElement.querySelector<HTMLButtonElement>(
    "." + style["drawer-close"]
  );
  if (!closeButton) throw new Error(".drawer-close-button is not exist");
  closeButton.addEventListener("click", () => {
    close();
  });

  const mc = new Hammer(bar);
  mc.get("swipe").set({ direction: Hammer.DIRECTION_VERTICAL });
  mc.get("pan").set({ direction: Hammer.DIRECTION_VERTICAL });

  const isSwipeRelease = (e: HammerInput) => {
    const thresholdVelocity = 0.2;
    return Math.abs(e.velocity) > thresholdVelocity;
  };

  mc.on("swipe", (e) => {
    if (!isSwipeRelease(e)) return;

    Y_POSITION.PEEKING = window.innerHeight - 300;
    Y_POSITION.HIDE = window.innerHeight - 36;

    if (e.direction === Hammer.DIRECTION_UP) {
      // from bottom to top
      currentYPosition = swipeYPositionToTop(currentYPosition);
      currentDeltaY = Y_POSITION[currentYPosition];
    } else if (e.direction === Hammer.DIRECTION_DOWN) {
      // from top to bottom
      currentYPosition = swipeYPositionToBottom(currentYPosition);
      currentDeltaY = Y_POSITION[currentYPosition];
      close();
    }

    drawerElement.style.transition = `transform 0.3s`;
    drawerElement.style.transform = `translate3d(0, ${currentDeltaY}px, 0)`;
    main.style.height = `calc(100% - ${
      currentDeltaY + bar.clientHeight + header.clientHeight
    }px)`;
  });

  mc.on("pan", (e) => {
    const toY = currentDeltaY + e.deltaY;

    if (!(Y_POSITION.VIEWED <= toY && toY <= Y_POSITION.HIDE)) return;

    currentYPosition = "FREE";

    drawerElement.style.transition = `none`;
    drawerElement.style.transform = `translate3d(0, ${toY}px, 0)`;
    main.style.height = `calc(100% - ${
      toY + bar.clientHeight + header.clientHeight
    }px)`;
    if (e.isFinal) {
      currentDeltaY += e.deltaY;
    }
  });

  return { open, close };
};
