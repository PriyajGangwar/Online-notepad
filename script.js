document.getElementById("notepad").value = localStorage.getItem("notepadText") || "";

function saveText() {
    localStorage.setItem("notepadText", document.getElementById("notepad").value);
}

function deleteText() {
    document.getElementById("notepad").value = "";
    saveText();
}

function newText() {
    localStorage.removeItem("notepadText");
    window.open(window.location.href, "_blank");   
}

function toggleDarkMode() {  //handles user interaction
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode") ? "enabled" : "disabled");
}

if (localStorage.getItem("darkMode") === "enabled") {  //handles initial page load
    document.body.classList.add("dark-mode");
}

document.getElementById("github-link").href = "https://github.com/PriyajGangwar/Online-notepad";
