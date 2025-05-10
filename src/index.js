import "./style.css";
import { renderHomePage } from "./load.js";
import { renderMenuPage } from "./menu.js";
import { renderAboutPage } from "./about.js";

function clearBody() {
  document.body.innerHTML = "";
}

function initNavigation() {
  const homeButton = document.getElementById("home-nav-button");
  const menuButton = document.getElementById("menu-nav-button");
  const aboutButton = document.getElementById("about-nav-button");

  homeButton.addEventListener("click", () => {
    clearBody();
    renderHomePage();
    initNavigation();
  });

  menuButton.addEventListener("click", () => {
    clearBody();
    renderMenuPage();
    initNavigation();
  });

  aboutButton.addEventListener("click", () => {
    clearBody();
    renderAboutPage();
    initNavigation();
  });
}

window.addEventListener("load", () => {
  renderHomePage();
  initNavigation();
});
