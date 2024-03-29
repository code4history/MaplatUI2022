import { Meta, Story } from "@storybook/html";
import { withPseudo } from "@ergosign/storybook-addon-pseudo-states-html";
import { maplatPseudoParametersWithInteractiveCase } from "./../../../utils/pseudo-states";
import style from "../../maplat.scss";
import type { Styles, ClassNames } from "../../icons/maplat-icons.scss";

export default {
  title: "Component/Button",
  argTypes: {
    label: { control: "text" },
  },
  decorators: [withPseudo],
  parameters: {
    ...maplatPseudoParametersWithInteractiveCase,
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
  btn.className = style["rounded-full-button-black"];
  btn.innerHTML = `
    <i class="${style["i-help-24"]}"></i>
    <span>Maplatヘルプ</span>
  `;
  return btn;
};

export const MobileRoundedButtonBlack: Story = (...params) => {
  return RoundedButtonBlack(...params);
};
MobileRoundedButtonBlack.parameters = {
  viewport: {
    defaultViewport: "iphone12mini",
  },
};

export const RoundedButtonWhite: Story = () => {
  const btn = document.createElement("button");
  const i = createIcon(style["i-map-reset-24"]);
  btn.innerHTML = i.outerHTML + "地図をリセット";
  btn.className = style["rounded-full-button"];
  return btn;
};

export const SquareButton: Story = () => {
  const btn = document.createElement("button");

  btn.className = style["square-button"];
  btn.appendChild(createIcon(style["i-gps-on-24"]));
  return btn;
};

export const SquareButtonGroup: Story = () => {
  const div = document.createElement("div");
  div.classList.add(style["square-button-group"]);
  div.innerHTML = `
    <button class="${style["square-button"]}">
      <i class="${style["i-plus-24"]}"></i>
    </button>
    <button class="${style["square-button"]}">
      <i class="${style["i-minus-24"]}"></i>
    </button>
  `;
  return div;
};

export const CircleButtonGray: Story = () => {
  const btn = document.createElement("button");

  btn.className = style["circle-button-gray"];
  btn.appendChild(createIcon(style["i-share-24"]));
  return btn;
};

export const CircleButtonWhite: Story = () => {
  const btn = document.createElement("button");
  btn.className = style["circle-button"];
  btn.appendChild(createIcon(style["i-next-24"]));
  return btn;
};

export const CircleButtonMD: Story = () => {
  const btn = document.createElement("button");
  btn.className = style["circle-button-md"];
  btn.appendChild(createIcon(style["i-search-24"]));
  return btn;
};

export const UserButton: Story = () => {
  const btn = document.createElement("button");
  btn.className = style["user-button"];
  btn.innerHTML = `
    <div class="${style["user-icon-wrapper"]}">
      <img src="/user_icon.png" class="${style["user-icon"]}" />
    </div>
    <span>山田 太郎</span>
  `;
  return btn;
};

export const MobileUserButton: Story = (...params) => {
  return UserButton(...params);
};
MobileUserButton.parameters = {
  viewport: {
    defaultViewport: "iphone12mini",
  },
};

export const LoginButton: Story = () => {
  const button = document.createElement("button");
  button.classList.add(style["login-button"]);
  button.innerHTML = `
    <i class="${style["i-login-twitter-24"]}"></i>
    <span>Twitterでログイン</span>
  `;
  return button;
};
LoginButton.parameters = {
  backgrounds: {
    default: "dark",
  },
};

export const ClearBlackButton: Story = () => {
  const button = document.createElement("button");
  button.className = style["clear-black-button"];
  button.appendChild(createIcon(style["i-close-24"]));
  return button;
};

export const ClearWhiteButton: Story = () => {
  const button = document.createElement("button");
  button.className = style["clear-white-button"];
  button.appendChild(createIcon(style["i-close-24"]));
  return button;
};
ClearWhiteButton.parameters = {
  backgrounds: {
    default: "dark",
  },
};
