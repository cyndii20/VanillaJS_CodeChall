import "./style.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const title = document.querySelector("h2");

const superEventHandler = {
  mouseEnter: () => {
    title.innerText = "Mouse Entered!";
    title.style.color = colors[0];
  },
  mouseLeave: () => {
    title.innerText = "Mouse Gone!";
    title.style.color = colors[2];
  },
  windowResize: () => {
    title.innerText = "Window Resized!";
    title.style.color = colors[4];
  },
  rightClick: () => {
    title.innerText = "Mouse Right Clicked!";
    title.style.color = colors[3];
  },
};

title.addEventListener("mouseenter", superEventHandler.mouseEnter);
title.addEventListener("mouseleave", superEventHandler.mouseLeave);
window.addEventListener("resize", superEventHandler.windowResize);
window.addEventListener("contextmenu", superEventHandler.rightClick);
