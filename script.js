// Generate a random number between -10^10 and 10^10
const randomNumber = Math.floor(Math.random() * (2 * 10**10 + 1)) - 10**10;
console.log(randomNumber); // For debugging purposes

document.getElementById('guessForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const userGuess = parseInt(document.getElementById('guessInput').value);
    const resultElement = document.getElementById('result');

    if (userGuess < randomNumber) {
        resultElement.textContent = 'Higher!';
    } else if (userGuess > randomNumber) {
        resultElement.textContent = 'Lower!';
    } else {
        resultElement.textContent = 'Correct!';
    }
});
