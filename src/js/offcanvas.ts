import style from "../maplat.scss";

export const offcanvas = (selector: string) => {
  const el: HTMLDivElement | null = document.querySelector(selector);

  el?.style.setProperty(
    "--maplat-layer-switcher-tab-height",
    String(el?.querySelector(".tabs")?.clientHeight ?? "") + "px"
  );
  el?.classList.toggle(style["offcanvas-bottom-hidden"]);
};
