let CCount = 0;

const colors = ["#a0009d", "#ff0000", "#0b00a4", "#171717" ];

let dark = localStorage.getItem("dark") === "true";

function declick() {
    document.body.classList.remove("CCanim");
}

function clicked() {
    CCount++;
    document.getElementById("score").textContent = CCount;
    document.body.classList.add("CCanim");
    setTimeout(declick, 50);
}

if(dark) {
    ModeChange()
}

function ModeChange() {
    const isDark = document.body.classList.toggle("darkmode");
    const logo = document.getElementById("logo");

    logo.src = isDark
        ? "./images/dark.png"
        : "./images/Unbenannt.jpg";

    localStorage.setItem("dark", "true");
}
