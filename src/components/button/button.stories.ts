import { Meta, Story } from "@storybook/html";
import button from "../../maplat.scss";
import icons, { type Styles, type ClassNames } from "../../icons/maplat-icons.scss";

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

export const Button:Story = () =>{
  const btn = document.createElement("button");
  btn.innerHTML = "キャッシュダウンロード"
  btn.className = button["button"];
  return btn;
}


export const RoundedButtonBlack:Story = () =>{
  const btn = document.createElement("button");
  const i = createIcon(icons["i-help"]);
  i.style.paddingRight = "10px";
  btn.innerHTML =  i.outerHTML + "Maplatヘルプ";
  btn.className = button["rounded-full-button-black"];
  return btn;
}

export const RoundedButtonWhite:Story = () =>{
  const btn = document.createElement("button");
  const i = createIcon(icons["i-reset"]);
  i.style.paddingRight = "10px";
  btn.innerHTML =  i.outerHTML + "地図をリセット";
  btn.className= button["rounded-full-button"];
  return btn;
}

export const SquareButton: Story = () => {
  const btn = document.createElement("button");
  btn.className = button["square-button"];
  btn.appendChild(createIcon(icons["i-gps_on-24"]));
  return btn;
};

export const SquareButtonGroup: Story = () => {
  const top = document.createElement("button");
  const bottom = document.createElement("button");
  top.type = "button";
  bottom.type = "button";

  top.appendChild(createIcon(icons["i-zoom_in"]));
  bottom.appendChild(createIcon(icons["i-zoom_out"]));

  const wrapper = document.createElement("div");
  wrapper.appendChild(top);
  wrapper.appendChild(bottom);
  wrapper.classList.add(button["square-button-group"]);

  return wrapper;
};

export const CircleButtonGray: Story = () => {
  const btn = document.createElement("button");
  btn.className = button["circle-button-gray"];
  btn.appendChild(createIcon(icons["i-share"]));
  return btn;
};

export const CircleButtonWhite: Story = () => {
  const btn = document.createElement("button");
  btn.className = button["circle-button"];
  btn.appendChild(createIcon(icons["i-arrow-01_prev"]));
  return btn;
};

export const CircleButtonMD: Story = () => {
  const btn = document.createElement("button");
  btn.className = button["circle-button-md"];
  btn.appendChild(createIcon(icons["i-search"]));
  return btn;
};
