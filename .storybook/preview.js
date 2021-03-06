import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { registerFixedViewport } from "../src/js/viewport.ts"
import style from "../src/maplat.scss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: {
    viewports: INITIAL_VIEWPORTS
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

document.body.onload = () => {
  document.getElementById("root").classList.add(style["maplat"]);

  // for iOS
  document.getElementById("root").style.height = "100dvh";

  // fallback
  if (!document.getElementById("root").style.height) {
    document.getElementById("root").style.height = "100vh"
  }

  registerFixedViewport();
};
