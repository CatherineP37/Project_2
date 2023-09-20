const boxes = document.querySelectorAll('.box');

let firstBox;
let secondBox;
let matchCounter = 0;

boxes.forEach(function (box) {
    let randomNumber = Math.floor(Math.random() * 20);
    box.style.order = randomNumber;	
