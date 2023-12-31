const boxes = document.querySelectorAll('.box');
let numberShowing = false;
let lock = false;
let firstBox, secondBox;
let matchCounter = 0;


// Shuffle boxes

boxes.forEach(function (box) {
    let randomNumber = Math.floor(Math.random() * 20);
    box.style.order = randomNumber;
});


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
        matchCounter++;
        if (matchCounter >= 10) setTimeout(() => alert('You won, well done!'), 1000);
        return;
    }

    hideNumber();
}

// Deactivate click 

function deactivateClick() {
    firstBox.removeEventListener('click', showNumber);
    secondBox.removeEventListener('click', showNumber);
}

// Hide number

function hideNumber() {
    lock = true;
    setTimeout(() => {
        firstBox.classList.remove('show');
        secondBox.classList.remove('show');

        lock = false;
    }, 1000);
}

// forEach method to apply the showNumber function to the boxes on click

boxes.forEach(box => box.addEventListener('click', showNumber));