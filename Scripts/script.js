let CCount = 0;

const colors = ["#a0009d", "#ff0000", "#0b00a4", "#171717" ];

let darkmode = false
let lightmode = true

function clicked() {
    CCount++;
    document.getElementById("score").textContent = CCount;

    document.body.style.backgroundColor = "#ff84fd";
    setTimeout(ColorBack, 80);
}
function ColorBack() {
    document.body.style.backgroundColor = "#ffffff";
}

function ModeChange() {
    document.body.classList.toggle("darkmode");
    if (lightmode) {
        document.getElementById("logo").src = "dark.png";
        darkmode = true
        lightmode = false
}
