////////////////////////////////////////////////////////////////
// the date of creating of the wbesite
const date = document.querySelector(".date-of-the-day");
date.textContent = new Date().getFullYear();

////////////////////////////////////////////////////////////////
// Navigation Arrangement
var btn = document.querySelector(".hidden");
var headerEL = document.querySelector(".header");
// var menuEl = document.querySelector(".menu-section");
// const item = document.querySelector(".list-item");

btn.addEventListener("click", function () {
  headerEL.classList.toggle("nav-open");

  if ('headerEL.classList.toggle("nav-open")' == false) {
    console.log("it is opening");
  } else {
    console.log("it is closing");
  }
});
