// script.js
function toggleTheme() {
    var theme = document.getElementById("theme-style");
    if (theme.getAttribute("href") == "light-mode.css") {
      theme.href = "dark-mode.css";
    } else {
      theme.href = "light-mode.css";
    }
  }
  