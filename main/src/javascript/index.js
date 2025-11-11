////////////////////////////////////////////////////////////////
// the date of creating of the wbesite
const date = document.querySelector(".date-of-the-day");
date.textContent = new Date().getFullYear();

////////////////////////////////////////////////////////////////
// Navigation Arrangement
var btn = document.querySelector(".hidden");
var headerEL = document.querySelector(".header");
// var menuEl = document.querySelector(".menu-section");

btn.addEventListener("click", function () {
  headerEL.classList.toggle("nav-open");
});

// closing the navigation side bar through the links
const item = document.querySelectorAll(".list-item:link");

item.forEach(function (link) {
  link.addEventListener("click", function () {
    console.log(link);
    headerEL.classList.toggle("nav-open");
  });
});

///////////////////////////////////////////////////////////
// Sticky navigation

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
