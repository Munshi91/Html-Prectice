var settingsmenu = document.querySelector(".settings__menu");

var darkBtn = document.getElementById("dark__btn");
function settingsMenuToggle() {
  settingsmenu.classList.toggle("settings__menu-height");
}
darkBtn.onclick = function () {
  darkBtn.classList.toggle("dark__btn-on");
  document.body.classList.toggle("dark__theme");

  if (localStorage.getItem("theme") == "light") {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
};

if (localStorage.getItem("theme") == "light") {
  darkBtn.classList.remove("dark__btn-on");
  document.body.classList.remove("dark__theme");
} else if (localStorage.getItem("theme") == "dark") {
  darkBtn.classList.add("dark__btn-on");
  document.body.classList.add("dark__theme");
} else {
  localStorage.setItem("theme", "light");
}

// localStorage.setItem("theme", "dark");
// localStorage.getItem("theme");
