const boxes = document.querySelectorAll('.box');

let firstBox;
let secondBox;
let matchCounter = 0;

boxes.forEach(function (box) {
    let randomNumber = Math.floor(Math.random() * 20);
    box.style.order = randomNumber;

    box.addEventListener('click', function () {

        if (!firstBox && !secondBox) {
            firstBox = box;
            box.classList.add('show');

        } else if (firstBox && !secondBox) {
            secondBox = box;
            box.classList.add('show');

            if (firstBox.innerHTML === secondBox.innerHTML) {
                firstBox.style.pointerEvents = 'none';
                secondBox.style.pointerEvents = 'none';

                firstBox = null;
                secondBox = null;

                matchCounter++;
                if (matchCounter >= 10) setTimeout(() => alert('Game complete - well done!'), 1000);
            } else {

                firstBox.classList.add('hide');
                secondBox.classList.add('hide');
                setTimeout(() => {
                    firstBox.classList.remove('show');
                    secondBox.classList.remove('show');
                    firstBox.classList.remove('hide');
                    secondBox.classList.remove('hide');
                    firstBox = null;
                    secondBox = null;
                }, 1000);
            }
        }

    });
}); 