var settingsmenu = document.querySelector(".settings__menu");

var darkBtn = document.getElementById("dark__btn");
function settingsMenuToggle() {
  settingsmenu.classList.toggle("settings__menu-height");
}
darkBtn.onclick = function () {
  darkBtn.classList.toggle("dark__btn-on");
};
