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
    }
}

const makeItInvisible = (dicePoint) => {
    if (!dicePoint.classList.contains('invisible')) {
        dicePoint.classList.add('invisible');
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

// Fonction qui trouve un chiffre entre un max et un min

const findNumberBetweenRange = (max,min) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Récupérer le score ROUND et GLOBAL du J1 et J2

const playerOneGlobal = document.getElementById('playerone-global');
const playerOneRound = document.getElementById('playerone-round');

const playerTwoGlobal = document.getElementById('playertwo-global');
const playerTwoRound = document.getElementById('playertwo-round');


// Définir le current Player

const playerOneRedDot = document.getElementById('playerone-reddot');
const playerTwoRedDot = document.getElementById('playertwo-reddot');
const playerOneTitle = document.getElementById('playerone-title');
const playerTwoTitle = document.getElementById('playertwo-title');
const playerOneSection = document.getElementById('playerone-section');
const playerTwoSection = document.getElementById('playertwo-section');
let currentPlayer = 1;

const changePlayer = (number) => {
    if (number === 1) {
        currentPlayer = 1;

        if (playerOneRedDot.classList.contains('hidden')) {
            playerOneRedDot.classList.remove('hidden');
        }
    
        playerOneTitle.classList.remove('font-extralight');
    
        if (playerOneSection.classList.contains('bg-gray-300')) {
            console.log('playerone a déjà le bg gray');
        } else {
            playerOneSection.classList.add('bg-gray-300');
        }
        
        playerTwoRedDot.classList.add('hidden');
    
        if (playerTwoTitle.classList.contains('font-extralight')) {
            console.log('playertwo a déjà la classe font-extralight');
        } else {
            playerTwoTitle.classList.add('font-extralight');
        }
    
        if (playerTwoSection.classList.contains('bg-gray-300')) {
            playerTwoSection.classList.remove('bg-gray-300');
        }
            else {
                console.log('playertwo n\'a pas le bg gris');
            }
    } else {
        currentPlayer = 2;

        playerOneRedDot.classList.add('hidden');
        playerOneTitle.classList.add('font-extralight');
        playerOneSection.classList.remove('bg-gray-300');
        playerTwoRedDot.classList.remove('hidden');
        playerTwoTitle.classList.remove('font-extralight');
        playerTwoSection.classList.add('bg-gray-300');
    }
}

console.log('le joueur actif est bien le ' + currentPlayer);

// Bouton Roll Dice

const rollDiceBtn = document.getElementById('roll-dice-btn');
let oneRoundScore = 0;
let twoRoundScore = 0;

rollDiceBtn.addEventListener('click', () => {
    let diceNumber = findNumberBetweenRange(6,1);
    dicePossibilities(diceNumber);
    if (currentPlayer === 1) {
        if (diceNumber === 1) {
            oneRoundScore = 0;
            changePlayer(2);
        } else {
            oneRoundScore += diceNumber;
        }
        playerOneRound.textContent = oneRoundScore;
    } else {
        if (diceNumber === 1) {
            twoRoundScore = 0;
            changePlayer(1);
        } else {
            twoRoundScore += diceNumber;
        }
        playerTwoRound.textContent = twoRoundScore;
    }
    console.log(oneGlobalScore);
    console.log(twoGlobalScore);
})

// Bouton Hold

const holdBtn = document.getElementById('hold-btn');
let oneGlobalScore = 0;
let twoGlobalScore = 0;

holdBtn.addEventListener('click', () => {
    if (currentPlayer === 1) {
        oneGlobalScore += oneRoundScore;
        playerOneGlobal.textContent = oneGlobalScore;
        oneRoundScore = 0;
        playerOneRound.textContent = 0;
        changePlayer(2);
    } else {
        twoGlobalScore += twoRoundScore;
        playerTwoGlobal.textContent = twoGlobalScore;
        twoRoundScore = 0;
        playerTwoRound.textContent = 0;
        changePlayer(1);
    }
    if (oneGlobalScore >= 100 || twoGlobalScore >= 100) {
        console.log('fin du jeu normalement');
        newGame();
    }
})

// Bouton New Game

const newGameBtn = document.getElementById('newgame-btn');

const newGame = () => {
    oneGlobalScore = 0;
    twoGlobalScore = 0;
    oneRoundScore = 0;
    twoRoundScore = 0;

    playerOneGlobal.textContent = 0;
    playerTwoGlobal.textContent = 0;
    playerOneRound.textContent = 0;
    playerTwoRound.textContent = 0;
    
    dicePossibilities(1);
    changePlayer(1);
}

newGameBtn.addEventListener('click', () => {
    newGame();
})

