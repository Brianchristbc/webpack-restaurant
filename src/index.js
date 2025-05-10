import "./style.css";
import { renderHomePage } from "./load.js";

window.addEventListener("load", () => {
  renderHomePage();

  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      alert(button.innerText);
    });
  });
});
