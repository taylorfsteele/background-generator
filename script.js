// import {lodash} from 'lodash';

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
const button = document.getElementById("button");

function setGradient() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
}
function randomColor() {
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += Math.floor((Math.random() * 16)).toString(16);
    }
    return color;
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
window.addEventListener("load", setGradient);
button.addEventListener("click", () => {
    color1.value = randomColor();
    color2.value = randomColor();
    setGradient();
});