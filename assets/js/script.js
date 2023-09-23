const boxes = document.querySelectorAll('.box');
let numberShowing = false;
let lock = false;
let firstBox, secondBox;

boxes.forEach(function (box) {
    let randomNumber = Math.floor(Math.random() * 20);
    box.style.order = randomNumber;
)};

