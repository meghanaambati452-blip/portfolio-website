// Load saved theme when page opens
window.onload = function () {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        document.getElementById("themeToggle").innerText = "☀️ Light Mode";
    } else {
        document.getElementById("themeToggle").innerText = "🌙 Dark Mode";
    }
};

// Toggle theme
function toggleTheme() {
    document.body.classList.toggle("dark-mode");

    let button = document.getElementById("themeToggle");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        button.innerText = "☀️ Light Mode";
    } else {
        localStorage.setItem("theme", "light");
        button.innerText = "🌙 Dark Mode";
    }
}