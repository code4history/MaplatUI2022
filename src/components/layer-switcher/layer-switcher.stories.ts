import { Meta, Story } from "@storybook/html";
import { useScript } from "./../../js/useScript";
import style from "../../maplat.scss";
import { layerSwitcher } from "./index";

export default {
  title: "LayerSwitcher",
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

const createSlide = (id: number) => {
  return `
  <div class="${style["swiper-slide"]} ${style["layer-slide"]}" data-layer-id="${id}">
    <div class="${style["layer-infomation"]}">
      <i class="${style["i-time-24"]}"></i>
      明治期 / 1868年以降
    </div>
    <div class="${style["layer-slide-img-wrapper"]}">
      <img src="/Nara,_Japan_(709-784).jpeg"></img>
    </div>
    <div class="${style["layer-name"]}">
      奈良市鳥瞰図
    </div>
  </div>
  `;
};

export const LayerSwitcher: Story = () => {
  const div = document.createElement("div");
  div.classList.add(style["tab-container"]);
  div.innerHTML = `
  <div class="${style["offcanvas"]} ${style["offcanvas-bottom"]}">
    <div class="${style["tabs"]}">
      <div>
        <button class="${style["tab"]}">古地図・絵地図</button>
        <button class="${style["tab"]}">現代地図</button>
        <button class="${style["tab2"]}" id="layer-switcher-toggle">
          <i class="${style["i-down-36"]}"></i>
        </button>
      </div>
      <div>
        <i class="${style["i-transparency-36"]}"></i>
        <div
          id="wrap"
          class="${style["wrap"]}"
          style="--maplat-min: 0;--maplat-max: 100;--maplat-val: 100"
        >
          <input id="r" type="range" min="0" max="100" step="1" value="100">
        </div>
      </div>
    </div>

    <div class="${style["tab-panes"]}" id="footerSlideContent">
      <div class="${style["tab-pane"]}">
        <div class="${style["layer-switcher"]}">
          <div class="${style["swiper"]} ${style["layer-switcher-swiper"]}">
            <div class="${style["swiper-wrapper"]}">
              ${createSlide(1)}
              ${createSlide(2)}
              ${createSlide(3)}
              ${createSlide(4)}
              ${createSlide(5)}
              ${createSlide(6)}
              ${createSlide(7)}
              ${createSlide(8)}
              ${createSlide(9)}
              ${createSlide(10)}
              ${createSlide(11)}
              ${createSlide(12)}
              ${createSlide(13)}
            </div>
          </div>
          <div class="${style["layer-switcher-prev-button"]}">
            <i class="${style["i-arrow-02-prev-36"]}"></i>
          </div>
          <div class="${style["layer-switcher-next-button"]}">
            <i class="${style["i-arrow-02-next-36"]}"></i>
          </div>
        </div>
      </div>
      <div class="${style["tab-pane"]}">DEF</div>
    </div>
  </div>`;

  useScript(() => {
    layerSwitcher(div, (el) => {
      console.log(el.dataset.layerId);
    });
  });

  return div;
};

export const MobileLayerSwitcher: Story = (...params) => {
  return LayerSwitcher(...params);
};
MobileLayerSwitcher.parameters = {
  viewport: {
    defaultViewport: "iphone12mini",
  },
};
