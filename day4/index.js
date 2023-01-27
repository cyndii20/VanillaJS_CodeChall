const body = document.querySelector("body");

window.addEventListener("resize", () => {
  if (window.innerWidth < 500) {
    body.className = "color-small";
  } else if (window.innerWidth < 800) {
    body.className = "color-middle";
  } else {
    body.className = "color-large";
  }
});
