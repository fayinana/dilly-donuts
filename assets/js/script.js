const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const links = document.querySelector(".links");

menu.addEventListener("click", () => {
  links.classList.toggle("show-links");
});
close.addEventListener("click", () => {
  links.classList.toggle("show-links");
});

const width = document.querySelector("body").clientWidth;
window.addEventListener("change", () => {
  if (width > 768) {
    links.classList.remove("show-links");
  }

  console.log("change");
});

const dateDOM = document.querySelector("#date");
const date = new Date();

dateDOM.innerHTML = date.getFullYear();
