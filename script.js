// Generate a random number between -10^10 and 10^10
// const randomNumber = Math.floor(Math.random() * (2 * 10**20 + 1)) - 10**20;
// console.log(randomNumber); // For debugging purposes
const randomNumber = 65919228044378374235;

const inputElement = document.querySelector("#guessInput");
const audio = document.getElementById("myAudio");

inputElement.addEventListener('input', (event) => {
    const userGuessString = document.getElementById('guessInput').value;
    const userGuess = parseInt(userGuessString ? userGuessString : "0");
    const resultElement = document.getElementById('result');

    if (userGuess < randomNumber) {
        resultElement.textContent = 'Higher!';
    } else if (userGuess > randomNumber) {
        resultElement.textContent = 'Lower!';
    } else {
        resultElement.textContent = 'Correct!';
        audio.play();
    }

    const middleCar = document.getElementById('middle-car');
    middleCar.style.width = ((userGuessString.length - 2) * 17).toFixed(2).toString() + "px";

});
