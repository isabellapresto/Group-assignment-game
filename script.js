const body = document.querySelector("body");
const door1 = document.querySelector("#door1");
const door2 = document.querySelector("#door2");
const door3 = document.querySelector("#door3");
const btn1 = document.querySelector (".btn1");
const btn2 = document.querySelector (".btn2");
const btn3 = document.querySelector(".btn3");
const escapebtn = document.querySelector(".escapebtn");
const back = document.querySelector(".back");
const textDoor3 = document.querySelector(".textdoor3");

//Happens when you go in to door 1 


function walkToBomb(){
    door1.style.display.none;
    door2.style.display.none;
    door3.style.display.none;

}

//Happens when you go in to door 3

btn3.addEventListener("click", openDoor3);

function openDoor3(){
    body.style.backgroundColor = "orange";
    door1.style.display = "none";
    door2.style.display = "none";
    door3.style.display = "none";
    escapebtn.style.display = "block";
    back.style.display = "block";
    textDoor3.innerText = "No wrong turn!!";
    textDoor3.style.color = "red";
}

escapebtn.addEventListener("click", walkToEscape);

function walkToEscape(){
    body.style.backgroundColor = "black";
    door1.style.display = "block";
    door2.style.display = "block";
    door3.style.display = "block";
    escapebtn.style.display = "none";
    back.style.display = "none";
    textDoor3.innerText = "Let the game begin";
    textDoor3.style.color = "white";
}