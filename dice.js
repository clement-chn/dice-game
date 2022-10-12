// Déclaration des points du dé

const topLeft = document.getElementById('top-left');
const topMiddle = document.getElementById('top');
const topRight = document.getElementById('top-right');
const left = document.getElementById('left');
const middle = document.getElementById('middle');
const right = document.getElementById('right');
const bottomLeft = document.getElementById('bottom-left');
const bottom = document.getElementById('bottom');
const bottomRight = document.getElementById('bottom-right');

// Fonctions qui rendent invisible ou visible un point du dé

const makeItVisible = (dicePoint) => {
    if (dicePoint.classList.contains('invisible')) {
        dicePoint.classList.remove('invisible');
        console.log('ce point est désormais visible');
    }
}

const makeItInvisible = (dicePoint) => {
    if (!dicePoint.classList.contains('invisible')) {
        dicePoint.classList.add('invisible');
        console.log('ce point est désormais invisible');
    }
}

// Fonction qui va positionner les points du dé en fonction du chiffre

const dicePossibilities = (number) => {
    switch (number) {
        case 2:
            makeItVisible(topLeft);
            makeItVisible(bottomRight);
            makeItInvisible(topMiddle);
            makeItInvisible(topRight);
            makeItInvisible(left);
            makeItInvisible(middle);
            makeItInvisible(right);
            makeItInvisible(bottomLeft);
            makeItInvisible(bottom);
            break;
        case 3:
            makeItVisible(topRight);
            makeItVisible(middle);
            makeItVisible(bottomLeft);
            makeItInvisible(topLeft);
            makeItInvisible(topMiddle);
            makeItInvisible(left);
            makeItInvisible(right);
            makeItInvisible(bottom);
            makeItInvisible(bottomRight);
            break;
        case 4:
            makeItVisible(topLeft);
            makeItVisible(topRight);
            makeItVisible(bottomLeft);
            makeItVisible(bottomRight);
            makeItInvisible(topMiddle);
            makeItInvisible(left);
            makeItInvisible(middle);
            makeItInvisible(right);
            makeItInvisible(bottom);
            break;
        case 5:
            makeItVisible(topLeft);
            makeItVisible(topRight);
            makeItVisible(middle);
            makeItVisible(bottomLeft);
            makeItVisible(bottomRight);
            makeItInvisible(topMiddle);
            makeItInvisible(left);
            makeItInvisible(right);
            makeItInvisible(bottom);
            break;
        case 6:
            makeItVisible(topLeft);
            makeItVisible(topRight);
            makeItVisible(left);
            makeItVisible(right);
            makeItVisible(bottomLeft);
            makeItVisible(bottomRight);
            makeItInvisible(topMiddle);
            makeItInvisible(middle);
            makeItInvisible(bottom);
            break;
        default:
            console.log('je suis dans la fonction et cest default, number est ' + number);
            makeItVisible(middle);
            makeItInvisible(topLeft);
            makeItInvisible(topMiddle);
            makeItInvisible(topRight);
            makeItInvisible(left);
            makeItInvisible(right);
            makeItInvisible(bottomLeft);
            makeItInvisible(bottom);
            makeItInvisible(bottomRight);
    }
}

// TESTS

const rollDiceBtn = document.getElementById('roll-dice-btn');

rollDiceBtn.addEventListener('click', () => {
    dicePossibilities(6);
})