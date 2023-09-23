const boxes = document.querySelectorAll('.box');
let numberShowing = false;
let lock = false;
let firstBox, secondBox;

// Shuffle boxes

boxes.forEach(function (box) {
    let randomNumber = Math.floor(Math.random() * 20);
    box.style.order = randomNumber;
)};


// Show number on click and find matches

function showNumber() {
    if (lock) return;
    this.classList.add('show');

    if (!numberShowing) {
        numberShowing = true;
        firstBox = this;
        return;
    }

    secondBox = this;
    numberShowing = false;

    match();
}

function match() {
    if (firstBox.innerHTML === secondBox.innerHTML) {
        deactivateClick();
        return;
    }

    hideNumber();
}

// Deactivate click 

function deactivateClick() {
    firstBox.removeEventListener('click', showNumber);
    secondBox.removeEventListener('click', showNumber);
}