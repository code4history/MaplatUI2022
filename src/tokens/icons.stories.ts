import {Meta, Story } from "@storybook/html";
import icons, { type ClassNames } from "../icons/maplat-icons.scss";

export default {
  title: "Tokens/Icons"
} as Meta;

const createIcon = (iconName: ClassNames) => {
  const wrapper = document.createElement("div");
  wrapper.style.display = "flex";
  wrapper.style.height = "100px";
  wrapper.style.width = "300px";

  const span = document.createElement("span");
  span.innerText = iconName
  span.style.width = "200px";
  wrapper.appendChild(span);

  const wrapper2 = document.createElement("div");
  wrapper2.style.height = "100px";
  wrapper2.style.width = "100px";
  wrapper2.style.fontSize = "80px";
  const i = document.createElement("i");
  i.classList.add(icons[iconName])

  wrapper2.appendChild(i);
  wrapper.appendChild(wrapper2);
  return wrapper;
};

export const Icons: Story = () => {
  const wrapper = document.createElement("div");
  wrapper.style.display = "flex";
  wrapper.style.flexDirection = "column";
  wrapper.style.gap = "10px";


  (Object.keys(icons) as ClassNames[]).forEach(iconName => {
    wrapper.appendChild(createIcon(iconName));
  });

  return wrapper;
};
