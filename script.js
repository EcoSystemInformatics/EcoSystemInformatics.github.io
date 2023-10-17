// script.js
function toggleTheme() {
    var theme = document.getElementById("theme-style");
    if (theme.getAttribute("href") == "light-mode.css") {
      theme.href = "dark-mode.css";
    } else {
      theme.href = "light-mode.css";
    }
  }
  
  function toggleMenu() {
    var menu = document.querySelector('nav .menu');
    // menu.style.display = 'flex';
    menu.classList.toggle('show');
}

 