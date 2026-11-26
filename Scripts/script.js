
let CCount = 0;

const colors = ["#a0009d", "#ff0000", "#0b00a4", "#171717"];

let dark = localStorage.getItem("dark") === "true";

let random = Math.floor(Math.random() * 100) + 1;

function enter() {
    let input = Number(document.getElementById("TBox").value);
    if (input < random){
        document.getElementById("hint").textContent = "Dein Guess ist kleiner als die Zahl!";
    }
    else if(input > random){
        document.getElementById("hint").textContent = "Dein Guess ist größer als die Zahl!";
    }
    else if(input == random){
        document.getElementById("hint").textContent = "Richtig!🎉";
    }
    else{
        document.getElementById("hint").textContent = "Dein Guess ist... Keine Zahl...🤦‍♂️";
    }
    document.getElementById("TBox").value = "";
}

function declick() {
    document.body.classList.remove("CCanim");
}

function clicked() {
    CCount++;
    document.getElementById("score").textContent = CCount;
    document.body.classList.add("CCanim");
    setTimeout(declick, 50);
}

function ModeChange() {
    const isDark = document.body.classList.toggle("darkmode");
    const logo = document.getElementById("logo");

    logo.src = isDark
        ? "./images/dark.png"
        : "./images/Unbenannt.jpg";

    localStorage.setItem("dark", String(isDark));
}

// Gespeicherten Modus wiederherstellen
if (dark) {
    document.body.classList.add("darkmode");
    document.getElementById("logo").src = "./images/dark.png";
}