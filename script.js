document.getElementById("notepad").value = localStorage.getItem("notepadText") || "";

function saveText() {
    localStorage.setItem("notepadText", document.getElementById("notepad").value);
}

function deleteText() {
    document.getElementById("notepad").value = "";
    saveText();
}

function newText() {
    if (confirm("Start a new note? This will clear your current text.")) {
        deleteText();
    }
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode") ? "enabled" : "disabled");
}

if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
}

document.getElementById("github-link").href = "https://github.com/PriyajGangwar/Online-notepad"; 
