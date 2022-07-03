import { Story, Meta } from "@storybook/html";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import style, { type ClassNames } from "./_breakpoints.scss";

interface ViewportStyle {
  height: string;
  width: string;
}

export default {
  title: "Tokens/Breakpoints",
} as Meta;

const hasWidthAndHeight = (obj: any):obj is ViewportStyle => {
  if(!obj) return false;
    if(!Object.hasOwn(obj, "width")) return false;
    if(!Object.hasOwn(obj, "height")) return false;
    return true;
}

export const Breakpoints: Story = () => {
  const table = document.createElement("table");
  const thead = document.createElement("thead")
  const th1 = document.createElement("th");
  th1.innerText = "Breakpoint Name";
  const th2 = document.createElement("th");
  th2.innerText = "Width";
  thead.appendChild(th1);
  thead.appendChild(th2);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");

  for (const bp in style) {
    if(bp === "maplat") continue;
    const tr = document.createElement("tr")
      const td1 = document.createElement("td");
      td1.innerText = bp;
      const td2 = document.createElement("td");
      td2.innerText = style[bp as ClassNames];
      tr.appendChild(td1);
      tr.appendChild(td2);
      tbody.appendChild(tr);
  }
  table.appendChild(tbody);

  return table;
}

export const ScreenSize: Story = () => {
  const table = document.createElement("table");
  const thead = document.createElement("thead")
  const th1 = document.createElement("th");
  th1.innerText = "Device Name";
  const th2 = document.createElement("th");
  th2.innerText = "Screen Size";
  thead.appendChild(th1);
  thead.appendChild(th2);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");

  for (const viewportKey in INITIAL_VIEWPORTS) {
    const tr = document.createElement("tr")
    const {name, styles} = INITIAL_VIEWPORTS[viewportKey];
    if(hasWidthAndHeight(styles)) {
      const td1 = document.createElement("td");
      td1.innerText =  name;
      const td2 = document.createElement("td");
      td2.innerText =  `${styles.width} x ${styles.height}`;
      tr.appendChild(td1);
      tr.appendChild(td2);
      tbody.appendChild(tr);
    };
  }
  table.appendChild(tbody);

  return table;
}
