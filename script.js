const door1 = document.querySelector("door1");
const door2 = document.querySelector("door2");
const door3 = document.querySelector("door3");
const btn1 = document.querySelector (".btn1")
const btn2 = document.querySelector (".btn2")
const btn3 = document.querySelector (".btn3")
const escapebtn = document.querySelector(".escapebtn")
const back = document.querySelector(".back")

//Happens when you go in to door 1 


function walkToBomb(){
    door1.style.display.none;
    door2.style.display.none;
    door3.style.display.none;

}