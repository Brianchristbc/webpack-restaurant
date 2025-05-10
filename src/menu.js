import hamburgerIcon from "./img/hamburger-icon.png";
import fatBirdLogo from "./img/fat-bird-logo.png";
import menuImageSrc from "./img/fat-bird-menu-image.png";

export function renderMenuPage() {
  //nav bar dom
  const body = document.querySelector("body");
  const header = document.createElement("header");
  const navBar = document.createElement("nav");
  navBar.classList.add("top-row");
  header.appendChild(navBar);
  const headerLeft = document.createElement("div");
  headerLeft.classList.add("header-left");
  const navHamburgerIcon = document.createElement("img");
  navHamburgerIcon.setAttribute("src", hamburgerIcon);
  navHamburgerIcon.setAttribute("alt", "menu icon");
  headerLeft.appendChild(navHamburgerIcon);
  navBar.appendChild(headerLeft);
  const headerMiddle = document.createElement("div");
  headerMiddle.classList.add("header-middle");
  const headerLogo = document.createElement("img");
  headerLogo.classList.add("top-row-header-middle-logo");
  headerLogo.setAttribute("src", fatBirdLogo);
  headerLogo.setAttribute("alt", "fat-bird-logo");
  headerMiddle.appendChild(headerLogo);
  navBar.appendChild(headerMiddle);
  const headerRight = document.createElement("div");
  headerRight.classList.add("header-right");
  const homeNavButton = document.createElement("button");
  homeNavButton.setAttribute("id", "home-nav-button");
  homeNavButton.innerText = "Home";
  headerRight.appendChild(homeNavButton);
  const menuNavButton = document.createElement("button");
  menuNavButton.setAttribute("id", "menu-nav-button");
  menuNavButton.innerText = "Menu";
  headerRight.appendChild(menuNavButton);
  const aboutNavButton = document.createElement("button");
  aboutNavButton.setAttribute("id", "about-nav-button");
  aboutNavButton.innerText = "About";
  headerRight.appendChild(aboutNavButton);
  navBar.appendChild(headerRight);
  body.appendChild(header);

  const bodyContent = document.createElement("div");
  bodyContent.setAttribute("id", "content");
  const bodyLeft = document.createElement("div");
  bodyLeft.classList.add("left");
  const heroImage = document.createElement("img");
  heroImage.classList.add("hero-image");
  heroImage.setAttribute("src", menuImageSrc);
  heroImage.setAttribute("alt", "hero image of fat bird's platter");
  bodyLeft.appendChild(heroImage);
  bodyContent.appendChild(bodyLeft);
  const bodyRight = document.createElement("div");
  bodyRight.classList.add("right");
  const heroTitleContainer = document.createElement("div");
  heroTitleContainer.classList.add("hero-title");
  const heroTitle = document.createElement("h1");
  heroTitle.innerText = "What's for dinner?";
  heroTitleContainer.appendChild(heroTitle);
  bodyRight.appendChild(heroTitleContainer);
  const heroSubtextContainer = document.createElement("div");
  heroSubtextContainer.classList.add("hero-subtext");
  const heroSubtext = document.createElement("p");
  heroSubtext.innerText = `Each dish is made with a generous hand❤️
 
  Our sides currently feature the creamy mac salad ($1.99) and golden tots ($1.29). They're the kind you pick at long after you’re full, just because they’re there.
  
  If you’re in the mood to skip the queue, you can place a pre-order anytime with our special automated AI voice hotline—just give us a call at 83030858 and let us take care of the rest (no awkward conversations, we promise).

`;
  heroSubtextContainer.appendChild(heroSubtext);
  bodyRight.appendChild(heroSubtextContainer);
  const ctaButtonContainer = document.createElement("div");
  ctaButtonContainer.classList.add("cta-button");
  const ctaButton = document.createElement("button");
  ctaButton.innerText = "Explore your entrées!";
  ctaButtonContainer.appendChild(ctaButton);
  bodyRight.appendChild(ctaButtonContainer);
  bodyContent.appendChild(bodyRight);
  body.appendChild(bodyContent);
  return;
}
