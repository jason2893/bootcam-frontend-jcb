const elMaskeWord = document.querySelector('.hangman__maskedword');
const elButtons = document.querySelector('.hangman__button');
const elResult = document.querySelector('.hangman__result');

const ANSWER = 'Jason Concepcion';

const word = ANSWER.toUpperCase();
const ALPHABET = Array.from({ length: 26 }, (_, index) => String.fromCharCode(65 + index));

let correctGuesses = '';
let tries = 0;
let maxTries = 10;

const selectLetter = (letter) => {
    console.log('Seleccionado letra:', letter);
    
     if (!word.includes(letter)) {
        tries++;
    } else {
        correctGuesses += letter;   
    }
   
    renderelMaskeWord(); 
    checkGameStatus();
};

const checkGameStatus = () => {
    if (!elMaskeWord.textContent.includes('_')) { 
        console.log('You won!');
        elResult.classList.remove('hidden');
        elResult.textContent = 'You won!';
    } else if (tries >= maxTries) { 
        console.log('You lost!');
        elResult.classList.remove('hidden');
        elResult.textContent = 'You lost!';
    }
};

const renderelMaskeWord = () => {
    elMaskeWord.textContent = word
        .split('')
        .map((letter) => (letter === ' ' ? ' ' : (correctGuesses.includes(letter) ? letter : '_')))  
        .join('');
};

const renderAlphabet = () => {
    let list = '';

    ALPHABET.forEach((letter) => { 
        list += `<button onclick="selectLetter('${letter}')" ${correctGuesses.includes(letter) ? 'disabled' : ''}>${letter}</button>`;
    });
    elButtons.innerHTML = list;
};

renderAlphabet();
renderelMaskeWord();
