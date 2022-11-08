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
