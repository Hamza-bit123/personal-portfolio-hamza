const menu_icon = document.getElementById("menu_icon");
const close_menu = document.getElementById("close_menu");
const nav = document.getElementById("nav-menu");
const contact_section = document.getElementById("contact--section");
const contact_btn = document.querySelectorAll(".contact_btn");
const project_btn = document.querySelectorAll(".project--btn");

const toggleMenu = () => {
  nav.classList.toggle("hidden");
};

menu_icon.addEventListener("click", toggleMenu);
nav.addEventListener("click", toggleMenu);

contact_btn.forEach((el) => {
  el.addEventListener("click", function () {
    contact_section.scrollIntoView({ behavior: "smooth" });
  });
});

window.addEventListener("scroll", function () {
  if (!nav.classList.contains("hidden")) {
    nav.classList.add("hidden");
  }
});

project_btn.forEach((element) => {
  element.addEventListener("click", function () {
    const url = "https://github.com/Hamza-bit123/" + element.id?.toString();

    const newTab = window.open(url, "_blank", "noopener,noreferrer");
    if (!newTab) {
      alert("Popup blocked! Please allow popups for this site.");
    }
  });
});
// https://github.com/Hamza-bit123/House-rental-system
