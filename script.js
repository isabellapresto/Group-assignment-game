const body = document.querySelector("body");
const door1 = document.querySelector("#door1");
const door2 = document.querySelector("#door2");
const door3 = document.querySelector("#door3");
const btn1 = document.querySelector (".btn1");
const btn2 = document.querySelector (".btn2");
const btn3 = document.querySelector(".btn3");
const escapebtn = document.querySelector(".escapebtn");
const textHeader = document.querySelector(".textHeader");
const imageDoor1 = document.querySelector(".imagedoor1");
const imageDoor3 = document.querySelector(".imagedoor3");
const cake = document.querySelector(".cake")

//Happens when you go in to door 1 
btn1.addEventListener("click", openDoor1);

function openDoor1(){
    body.style.backgroundColor = "yellow";
    door1.style.display = "none";
    door2.style.display = "none";
    door3.style.display = "none";
    escapebtn.style.display = "block";
    textHeader.innerText = "BOOM wrong turn!!";
    textHeader.style.color = "red";
    imageDoor1.style.display ="block";
    imageDoor3.style.display = "none";
}

//door 2

btn2.addEventListener("click", openDoor2);

function openDoor2(){
    body.style.backgroundColor = "pink";
    door1.style.display = "none";
    door2.style.display = "none";
    door3.style.display = "none";
    escapebtn.style.display = "block";
    textHeader.innerText = "Gongratulations! You won a cake!";
    textHeader.style.color = "black";
    cake.style.display = "block";
}

//Happens when you go in to door 3

btn3.addEventListener("click", openDoor3);

function openDoor3(){
    body.style.backgroundColor = "orange";
    door1.style.display = "none";
    door2.style.display = "none";
    door3.style.display = "none";
    escapebtn.style.display = "block";
    textHeader.innerText = "No wrong turn!!";
    textHeader.style.color = "red";
    imageDoor3.style.display = "block";
}

escapebtn.addEventListener("click", walkToEscape);

function walkToEscape(){
    body.style.backgroundColor = "black";
    door1.style.display = "block";
    door2.style.display = "block";
    door3.style.display = "block";
    escapebtn.style.display = "none";
    imageDoor1.style.display ="none";
    imageDoor3.style.display = "none";
    back.style.display = "none";
    textHeader.innerText = "Let the game begin";
    textHeader.style.color = "white";
    img.style.display = "none"
}

