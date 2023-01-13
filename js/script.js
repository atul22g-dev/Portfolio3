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

// libaries
const librariesSection = document.querySelector(".section-libraries");

document.querySelector(".libraries-link").addEventListener("click", (e) => {
  e.preventDefault();
  librariesSection.scrollIntoView({ behavior: "smooth" });
});
// contact

const contctSection = document.querySelector(".section-contact");

document.querySelector(".contact-link").addEventListener("click", (e) => {
  e.preventDefault();
  contctSection.scrollIntoView({ behavior: "smooth" });
});

// Toggles
const themeSwitcher = document.getElementById("icon");
const themeSwitcher2 = document.getElementById("modebtn2");
const body = document.getElementsByTagName("body")[0];
const svg = document.getElementById("mode-svg");
themeSwitcher.checked = false;

const clickHandler = () => {
  if (this.checked || body.classList == "light-mode") {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
    svg.src = "img/sun.svg";
    localStorage.setItem("theme", "dark-mode");
  } else {
    body.classList.add("light-mode");
    body.classList.remove("dark-mode");
    svg.src = "img/moon.svg";
    localStorage.setItem("theme", "light-mode");
  }
};

themeSwitcher2.addEventListener("click", clickHandler);
themeSwitcher.addEventListener("click", clickHandler);

// Change theme

const checkTheme = () => {
  const localStorageTheme = localStorage.getItem("theme");

  if (localStorageTheme !== null && localStorageTheme === "dark-mode") {
    // set the theme of body
    body.className = localStorageTheme;
    // adjust the slider position
    const themeSwitch = document.getElementById("icon");
    themeSwitch.checked = true;
  }
};

window.onload = checkTheme();

// Add Apis for projects

let project = null;

fetch("https://atugatran-projects.github.io/_Apis/Projects/index.json")
  .then((res) => res.json())
  .then((result) => {
    project = result;
    loadprojects();
  });

// NOTE
// i'm gonna parse the url so my websites json data is not effected;
function loadprojects() {
  let projects_container = document.getElementById("projects-container");
  let projects_item = project.map((i) => {
    return `
    <div class="Project">
    <div class="Project_data">
        <div class="project__detail-container">
            <!-- Heading -->
            <h2>${i.title}</h2>
            <!-- Descripsion -->
            <p>
            ${i.desc}
            </p>
            <!-- buttons -->
            <div class="Project_btns">
                <!-- 1 -->
                <a class="Project_btn" target="__blank" href=${i.src}>Source Code
                </a>
                <!-- 2 -->
                <a target="__blank" href=${i.demo}
                    class="Project_btn">Live Demo
                </a>
            </div>
        </div>
    </div>
    <!--*************** Side image ********************************************** -->
    <div class="Side_image">

        <!--******************************** image********************************* -->
        <div class="Side_image-img" style="background-image: url(${i.img})" ></div>
        <!-- html css js -->
        <div class="html-css-js_con">
            <!-- Html -->
            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="html5"
                class="Project_html Project_com_icon" role="img" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512">
                <path fill="currentColor"
                    d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z">
                </path>
            </svg>
            <!-- Css -->
            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="css3"
                class="Project_css" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor"
                    d="M480 32l-64 368-223.3 80L0 400l19.6-94.8h82l-8 40.6L210 390.2l134.1-44.4 18.8-97.1H29.5l16-82h333.7l10.5-52.7H56.3l16.3-82H480z">
                </path>
            </svg>
            <!-- Js -->
            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="js"
                class="Project_js Project_com_icon" role="img" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512">
                <path fill="currentColor"
                    d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z">
                </path>
            </svg>
        </div>
        <!-- /html css js -->
    </div>
</div>
  `;
  });
  projects_container.innerHTML = projects_item.join("");
}