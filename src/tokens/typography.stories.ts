import {Meta, Story } from "@storybook/html";
import typography, { type ClassNames } from "./_typography.scss";

export default {
  title: "Tokens/Typography"
} as Meta;

export interface TextProps {
  fontFamily: string;
  fontSize: string;
  text: string;
  isBold: boolean;
}

const createText = ({ fontFamily, fontSize, text, isBold }: TextProps) => {
  const p = document.createElement("p");
  p.innerText = `${fontSize} / ${isBold ? "bold" : "normal"} / ${text}`;
  p.style.fontFamily = fontFamily;
  p.style.fontSize = fontSize;
  if(isBold) {
    p.style.fontWeight = "bold";
  }
  return p;
};

const createTexts = (fontFamily: string, text: string) => {
  const div = document.createElement("div");

  const fontSizes = Object.keys(typography).filter(key=>key.startsWith("font-size-")) as ClassNames[];
  fontSizes.forEach(key => {
    div.appendChild(createText({fontFamily, fontSize: typography[key], text, isBold:false }));
  });
  fontSizes.forEach(key => {
    div.appendChild(createText({fontFamily, fontSize: typography[key], text, isBold:true }));
  });

  return div;
}

export const Japanese: Story = () => {
  return createTexts(typography["font-family-jp"], "abcあいう012");
};
export const Hangul: Story = () => {
  return createTexts(typography["font-family-hangul"], "abc표기장군012");
};
export const SimplifiedChinese: Story = () => {
  return createTexts(typography["font-family-sc"], "abc骠骑将军012");
};
export const TraditionalChinese: Story = () => {
  return createTexts(typography["font-family-tc"], "abc驃騎將軍012");
};
