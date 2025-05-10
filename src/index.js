import "./style.css";

console.log("test log");

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    alert(button.innerText);
  });
});
