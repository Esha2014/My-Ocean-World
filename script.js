var savedName = localStorage.getItem("oceanWorldVisitorName");
var nameScreen = document.getElementById("nameScreen");
var loadingScreen = document.getElementById("loadingScreen");
var mainWebsite = document.getElementById("mainWebsite");
var welcomeMessage = document.getElementById("welcomeMessage");

function openOceanWorld(name) {
    nameScreen.style.display = "none";
    loadingScreen.style.display = "flex";

    setTimeout(function () {
        loadingScreen.style.display = "none";
        mainWebsite.style.display = "block";

        if (welcomeMessage) {
            welcomeMessage.textContent =
                "Welcome, " + name + ", to My Ocean World! 🌊🐬";
        }

        if ("speechSynthesis" in window) {
            var message = new SpeechSynthesisUtterance(
                "Welcome " + name + " to My Ocean World"
            );

            message.rate = 0.9;
            message.pitch = 1;
            message.volume = 1;

            window.speechSynthesis.speak(message);
        }
    }, 2000);
}

if (savedName) {
    openOceanWorld(savedName);
}

document.getElementById("nameForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("visitorName").value.trim();

    if (name === "") {
        alert("Please enter your name first! 🌊");
        return;
    }

    localStorage.setItem("oceanWorldVisitorName", name);
    openOceanWorld(name);
});
