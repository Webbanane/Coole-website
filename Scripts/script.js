let CCount = 0;

const colors = ["#a0009d", "#ff0000", "#0b00a4", "#171717" ];

function declick() {
    document.body.classList.toggle("CCanim");
}

function clicked() {
    CCount++;
    document.getElementById("score").textContent = CCount;
    document.body.classList.toggle("CCanim");
    setTimeout(declick, 80);
}

function ModeChange() {
    const isDark = document.body.classList.toggle("darkmode");
    const logo = document.getElementById("logo");

    logo.src = isDark
        ? "./images/dark.png"
        : "./images/Unbenannt.jpg";
}
