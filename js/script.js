// Navbar
let nav_btn = document.getElementsByClassName("nav-btn")[0];
let btn = document.getElementById("btn");
let list = document.getElementById("list");

nav_btn.addEventListener("click", () => {
  btn.classList.toggle("is-active");
  list.classList.toggle("list2");
});

// ========================================
//  smooth scrolling
// ========================================

// Home

const homeSection = document.querySelector(".section-home");

document.querySelector(".home-link").addEventListener("click", (e) => {
  e.preventDefault();
  homeSection.scrollIntoView({ behavior: "smooth" });
});

// About

const aboutSection = document.querySelector(".section-about");

document.querySelector(".about-link").addEventListener("click", (e) => {
  e.preventDefault();
  aboutSection.scrollIntoView({ behavior: "smooth" });
});

// project

const projectSection = document.querySelector(".section-project");

document.querySelector(".project-link").addEventListener("click", (e) => {
  e.preventDefault();
  projectSection.scrollIntoView({ behavior: "smooth" });
});
// contact

const contctSection = document.querySelector(".section-contact");

document.querySelector(".contact-link").addEventListener("click", (e) => {
  e.preventDefault();
  contctSection.scrollIntoView({ behavior: "smooth" });
});

// Toggles
const themeSwitcher = document.getElementById("icon");
const body = document.getElementsByTagName("body")[0];

const themeSwitcher2 = document.getElementById("modebtn2");
themeSwitcher2.addEventListener("click", () => {
  // console.log("dark");
  if (body.classList == "dark-mode") {
    body.classList.add("dark-mode");
    body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light-mode");
  } else {
    body.classList.remove("dark-mode");
    body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark-mode");
  }
});

// With Local-storage

themeSwitcher.checked = false;

function clickHandler() {
  if (this.checked) {
    body.classList.remove("dark-mode");
    body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark-mode");
  } else {
    body.classList.add("dark-mode");
    body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light-mode");
  }
}
themeSwitcher.addEventListener("click", clickHandler);

function checkTheme() {
  const localStorageTheme = localStorage.getItem("theme");

  if (localStorageTheme !== null && localStorageTheme === "dark-mode") {
    // set the theme of body
    body.className = localStorageTheme;
    // adjust the slider position
    const themeSwitch = document.getElementById("icon");
    themeSwitch.checked = true;
  }
}

window.onload = checkTheme();
