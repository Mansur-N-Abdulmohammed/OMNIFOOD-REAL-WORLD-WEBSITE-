var a = "Hacked";
var b = "Fuck All Of You";

var btn = document.querySelector(".hidden");
var menu = document.querySelector(".menu-section");

console.log(btn);
btn.addEventListener("click", function () {
  menu.style.animation = "menu-opening 0.4s ease-in forwards";
});
