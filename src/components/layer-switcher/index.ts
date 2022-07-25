import Swiper, { Navigation, Mousewheel } from "swiper";
import style from "../../maplat.scss";
import { tabs } from "../../js/tabs";
import { offcanvas } from "../../js/offcanvas";

export const layerSwitcher = (
  containerElement: HTMLDivElement,
  onClick: (clickedSlide: HTMLElement) => void
) => {
  tabs(
    containerElement,
    style["tab"],
    style["tab-pane"],
    style["tab-active"],
    style["tab-pane-active"]
  );

  const rangeEl = containerElement.querySelector("input#r") as HTMLInputElement;
  const wrapEl = containerElement.querySelector("div#wrap") as HTMLDivElement;

  const layerSwitcherToggle = containerElement.querySelector(
    "#layer-switcher-toggle"
  );
  layerSwitcherToggle?.addEventListener("click", () => {
    offcanvas("." + style["offcanvas"]);
    const icon = layerSwitcherToggle.querySelector("i");
    icon?.classList.toggle(style["i-down-24"]);
    icon?.classList.toggle(style["i-up-24"]);
  });

  rangeEl.addEventListener(
    "input",
    (_e) => {
      wrapEl.style.setProperty("--maplat-val", +rangeEl.value as any);
    },
    false
  );

  const _swiper = new Swiper("." + style["swiper"], {
    modules: [Navigation, Mousewheel],
    mousewheel: true,
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 10,
    navigation: {
      nextEl: "." + style["layer-switcher-next-button"],
      prevEl: "." + style["layer-switcher-prev-button"],
      // disabledClass: style["layer-switcher-navigation-disabled"],
      // hiddenClass: style["layer-switcher-navigation-hidden"],
      // lockClass: style["layer-switcher-navigation-lock"],
      // navigationDisabledClass: style[""],
    },
    wrapperClass: style["swiper-wrapper"],
    slideActiveClass: style["swiper-slide-active"],
    slideBlankClass: style["swiper-slide-invisible-blank"],
    slideClass: style["swiper-slide"],
    slideNextClass: style["swiper-slide-next"],
    slidePrevClass: style["swiper-slide-prev"],
    slideVisibleClass: style["swiper-slide-visible"],
    on: {
      click(swiper, _event) {
        onClick(swiper.clickedSlide);
      },
    },
  });
};
