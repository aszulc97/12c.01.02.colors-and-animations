const checkbox = document.getElementById("switch");
// Apply retrived them to the website
checkbox.addEventListener("change", () => {
  let theme = document.documentElement.getAttribute("data-theme"); // Retrieve saved them from local storage
  if (theme === "dark") {
    changeThemeToLight();
    console.log("light");
  } else {
    changeThemeToDark();
    console.log("dark");
  }
});

function changeThemeToDark() {
  document.documentElement.setAttribute("data-theme", "dark"); //set theme to light
}

function changeThemeToLight() {
  document.documentElement.setAttribute("data-theme", "light"); //set theme to light
}
