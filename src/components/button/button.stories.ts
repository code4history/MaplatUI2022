import { Meta, Story } from "@storybook/html";
import style from "../../maplat.scss";
import type { Styles, ClassNames } from "../../icons/maplat-icons.scss";

export default {
  title: "Button",
  argTypes: {
    label: { control: "text" },
  },
} as Meta;

const createIcon = (icon: Styles[ClassNames]) => {
  const i = document.createElement("i");
  i.classList.add(icon);
  return i;
};

export const Button: Story = () => {
  const btn = document.createElement("button");
  btn.innerHTML = "キャッシュダウンロード";
  btn.className = style["button"];
  return btn;
};

export const RoundedButtonBlack: Story = () => {
  const btn = document.createElement("button");
  const i = createIcon(style["i-help"]);
  i.style.paddingRight = "10px";
  btn.innerHTML = i.outerHTML + "Maplatヘルプ";
  btn.className = style["rounded-full-button-black"];
  return btn;
};

export const RoundedButtonWhite: Story = () => {
  const btn = document.createElement("button");
  const i = createIcon(style["i-reset"]);
  i.style.paddingRight = "10px";
  btn.innerHTML = i.outerHTML + "地図をリセット";
  btn.className = style["rounded-full-button"];
  return btn;
};

export const SquareButton: Story = () => {
  const btn = document.createElement("button");

  btn.className = style["square-button"];
  btn.appendChild(createIcon(style["i-gps_on-24"]));
  return btn;
};

export const SquareButtonGroup: Story = () => {
  const div = document.createElement("div");
  div.classList.add(style["square-button-group"]);
  div.innerHTML = `
    <button class="${style["square-button"]}">
      <i class="${style["i-zoom_in"]}"></i>
    </button>
    <button class="${style["square-button"]}">
      <i class="${style["i-zoom_out"]}"></i>
    </button>
  `;
  return div;
};

export const CircleButtonGray: Story = () => {
  const btn = document.createElement("button");

  btn.className = style["circle-button-gray"];
  btn.appendChild(createIcon(style["i-share"]));
  return btn;
};

export const CircleButtonWhite: Story = () => {
  const btn = document.createElement("button");
  btn.className = style["circle-button"];
  btn.appendChild(createIcon(style["i-arrow-01_prev"]));
  return btn;
};

export const CircleButtonMD: Story = () => {
  const btn = document.createElement("button");
  btn.className = style["circle-button-md"];
  btn.appendChild(createIcon(style["i-search"]));
  return btn;
};
