import { match } from 'ts-pattern';
import { Story, Meta } from "@storybook/html";
import style, { type ClassNames } from "./_borders.scss";

export default {
  title: "Tokens/Borders",
} as Meta;

type Types = {type: "width"} | {type: "radius"};

type BorderBoxProps = {
  name: string;
  value: string;
} & Types;

const createBox = ({  name, value, type }: BorderBoxProps) => {
  const box = document.createElement("div");
  match(type)
    .with("radius", () => {
      box.style.borderWidth = "1px";
      box.style.borderRadius = value;
    })
    .with("width", () => { box.style.borderWidth = value; })
    .exhaustive();

  box.style.borderColor = "#333";
  box.style.borderStyle = "solid";
  box.style.height = "100px";
  box.style.width = "100px";
  box.style.padding = "10px";
  box.innerText = name;
  return box;
};

const createBoxs = (borders: Array<BorderBoxProps>) => {
  const wrapper = document.createElement("div");
  wrapper.style.display = "flex";
  wrapper.style.gap = "20px";

  borders.forEach((b) => {
    wrapper.appendChild(createBox(b));
  });
  return wrapper;
};

export const Borders: Story = () => {
  const wrapper = document.createElement("div");
  wrapper.style.display = "flex";
  wrapper.style.gap = "20px";
  wrapper.style.flexDirection = "column";

  wrapper.appendChild(createBoxs(
    (Object.keys(style) as unknown as Array<ClassNames>).filter(key=>key.startsWith("border-width-")).map((name) => ({
      type: "width",
      name,
      value: style[name]
    }))
  ));

  wrapper.appendChild(createBoxs(
    (Object.keys(style) as unknown as Array<ClassNames>).filter(key=>key.startsWith("border-radius-")).map((name) => ({
      type: "radius",
      name,
      value: style[name]
    }))
  ));

  return wrapper;
};
