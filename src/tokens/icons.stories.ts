import { Meta, Story } from "@storybook/html";
import icons from "../icons/maplat-icons.scss";
import type { ClassNames } from "../icons/maplat-icons.scss";

export default {
  title: "Tokens/Icons",
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

const createIcon = (iconName: ClassNames) => {
  const wrapper = document.createElement("div");
  wrapper.style.display = "flex";
  wrapper.style.height = "100px";
  wrapper.style.width = "200px";
  wrapper.style.flexDirection = "row";
  wrapper.style.justifyContent = "center";
  wrapper.style.alignItems = "center";
  wrapper.style.textAlign = "center";

  const wrapper2 = document.createElement("div");
  wrapper2.style.height = "100px";
  wrapper2.style.width = "100px";
  wrapper2.style.fontSize = "80px";
  wrapper2.style.textAlign = "center";
  const i = document.createElement("i");
  i.classList.add(icons[iconName]);
  wrapper2.appendChild(i);

  const span = document.createElement("span");
  span.innerText = iconName;
  span.style.width = "100%";

  wrapper.appendChild(wrapper2);
  wrapper.appendChild(span);

  return wrapper;
};

export const Icons: Story = () => {
  const wrapper = document.createElement("div");
  wrapper.style.display = "flex";
  wrapper.style.gap = "10px";
  wrapper.style.flexDirection = "column";
  wrapper.style.alignItems = "left";
  wrapper.style.overflowY = "scroll";
  wrapper.style.height = "100vh";

  (Object.keys(icons) as ClassNames[]).forEach((iconName) => {
    wrapper.appendChild(createIcon(iconName));
  });

  return wrapper;
};
