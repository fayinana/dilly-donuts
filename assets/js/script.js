const menu = document.querySelector(".menu");
const links = document.querySelector(".links");

menu.addEventListener("click", () => {
  links.classList.toggle("hide-menu");
});

const dateDOM = document.querySelector(".date");
const date = new Date();

dateDOM.innerHTML = date.getFullYear();

