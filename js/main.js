'use strict';


const field = document.querySelector('input');
const containerCounter = document.querySelector('.zero');
const numberZero = document.querySelector('.app__counter');
const button = document.querySelector('.btn');

let counter = 0;
containerCounter.innerHTML = counter;

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max)
}

const myRandomNumber = getRandomNumber(100);
console.log(`Mi número aleatorio es ${myRandomNumber}`);


function tryGame() {
    const userNumber = parseInt(field.value);

    if (myRandomNumber === userNumber) {
        numberZero.innerHTML = '¡Has ganado campeona!';

    } else if (myRandomNumber > userNumber) {
        numberZero.innerHTML = 'Demasiado bajo';
        counter += 1;
        containerCounter.innerHTML = counter;

    } else if (userNumber > 100) {
        numberZero.innerHTML = '¡Error! Es un número menor que 100';
        counter += 1;
        containerCounter.innerHTML = counter;

    } else {
        numberZero.innerHTML = 'Demasiado alto';
        counter += 1;
        containerCounter.innerHTML = counter;
    }

}


button.addEventListener('click', tryGame);



/* const resetButton = document.querySelector('.js__button');

function resetInput() {
    numberZero.innerHTML = defaultElement.value;
}

resetButton.addEventListener('click', resetInput); */

