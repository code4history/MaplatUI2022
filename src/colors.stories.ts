import {Meta, Story } from "@storybook/html";
import colors, { type ClassNames } from "./_colors.scss";
import tokenColors from "./tokens/_colors.scss";

export default {
  title: "Aliases/Colors"
} as Meta;

interface ColorBoxProps {
  color: string;
  name: string;
}

const createColorBox = ({ color, name }: ColorBoxProps) => {
  const box = document.createElement("div");
  box.style.backgroundColor = color;
  box.style.height = "100px";
  box.style.width = "100px";
  box.innerText = name;
  return box;
};

const createColorBoxs = (colors: Array<ColorBoxProps>) => {
  const wrapper = document.createElement("div");
  wrapper.style.display = "flex";

  colors.forEach((c) => {
    wrapper.appendChild(createColorBox(c));
  });
  return wrapper;
};

export const Colors: Story = () => {
  return createColorBoxs(
    (Object.keys(colors) as unknown as Array<ClassNames>)
    .filter(color=> !(color in tokenColors))
    .map(
      (name) => ({
        name,
        color: colors[name],
      })
    )
  );
};
