let CCount = 0;

const colors = ["#a0009d", "#ff0000", "#0b00a4", "#171717" ];

let darkmode = false

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
    if(darkmode == false) {
        document.getElementById("logo").src="images/dark.png";
        darkmode = true;
    }
    else if (darkmode) {
        document.getElementById("logo").src="images/Unbenannt.jpg";
        darkmode = false;
    }
}
