document.addEventListener("DOMContentLoaded", function () {
  let btn = document.querySelector(".btn");
  let lightMode = document.querySelector(".to-light-mode");
  let darkMode = document.querySelector(".to-dark-mode");
  let body = document.querySelector("body");
  let home = document.querySelector(".home-info");
  let h1 = document.querySelectorAll("h1");
  let a = document.querySelectorAll(".alinks");
  let p = document.querySelectorAll("p");
  let icon = document.querySelector("img");

  let isLight = true;
  btn.addEventListener("click", function () {
    if (isLight) {
      dark();
    } else {
      light();
    }
    isLight = !isLight;
  });

  function light() {
    body.style.backgroundColor = "#FAF9F6";

    p.forEach((e) => {
      e.style.color = "rgb(65, 65, 65)";
    });

    h1.forEach((elem) => {
      elem.style.color = "black";
    });

    a.forEach((e) => {
      e.classList.remove("invert"); // Ensure it resets
    });

    icon.src = "./svgs/darkIcon.svg";
    icon.classList.remove("invert");
  }

  function dark() {
    body.style.backgroundColor = "#1D1E20";

    p.forEach((e) => {
      e.style.color = "rgb(173, 173, 173)";
    });

    h1.forEach((elem) => {
      elem.style.color = "white";
    });

    a.forEach((e) => {
      e.classList.add("invert");
    });

    icon.src = "./svgs/lighticon.svg";
    icon.classList.add("invert");

    document.documentElement.style.setProperty("--scollbar-bg", "#1a1a1a");
    document.documentElement.style.setProperty("--scrollbar-thumb", "white");
  }
});