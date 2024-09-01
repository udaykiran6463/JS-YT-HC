// Function to get a random number between min and max
function getRandomBetween(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}

// Select DOM elements
const inputBox = document.querySelector("#input");
const result = document.querySelector('#result');
const submitBtn = document.querySelector('#submit');
const retryBtn = document.querySelector('#retry');
const prev = document.querySelector('.prev');
const remain = document.querySelector('.remain');

// Initial setup
let remaining = 10;
retryBtn.style.display = "none";
result.style.display = "none";
let prevGuess = [];
let randomNumber = getRandomBetween(1, 100);

console.log(randomNumber);

// Restart game function
function restartGame() {
    remaining = 10;
    retryBtn.style.display = "none";
    result.style.display = "none";
    prevGuess = [];
    prev.innerHTML = prevGuess;
    remain.innerHTML = remaining;
    inputBox.style.display = 'block';
    submitBtn.style.display = 'block';
    randomNumber = getRandomBetween(1, 100);
}

// Update remaining attempts display
remain.innerHTML = remaining;

// Event listeners
retryBtn.addEventListener('click', restartGame);

submitBtn.addEventListener("click", (e) => {
    remain.innerHTML = remaining;
    const inputValue = inputBox.value;
    const numericValue = Number(inputValue);

    if (remaining <= 0) {
        result.innerHTML = 'LOST';
        result.style.display = 'block';
        result.style.color = 'red';
        retryBtn.style.display = 'block';
        inputBox.style.display = 'none';
        submitBtn.style.display = 'none';
        return; // Exit function
    }

    if (inputValue.trim() === '') {
        inputBox.value = "Enter the Number in the box";
        inputBox.placeholder = "";
        inputBox.style.color = 'red';
    } else if (isNaN(numericValue)) {
        inputBox.value = "Enter a valid input";
        inputBox.placeholder = "";
        inputBox.style.color = 'red';
    } else {
        remaining -= 1;

        if (numericValue < 1 || numericValue > 100) {
            inputBox.value = "Enter the number between 1 and 100";
            inputBox.placeholder = "";
            inputBox.style.color = 'red';
        } else {
            prevGuess.push(numericValue);
            prev.innerHTML = prevGuess;
            inputBox.value = "";

            if (numericValue === randomNumber) {
                // Correct guess
                result.style.display = 'block';
                result.innerHTML = 'Winner';
                inputBox.style.display = 'none';
                submitBtn.style.display = 'none';
                retryBtn.style.display = 'block';
            } else {
                // Incorrect guess
                if (numericValue > randomNumber) {
                    inputBox.value = "SMALLER";
                } else {
                    inputBox.value = "LARGER";
                }
                inputBox.style.color = "lightgreen";
            }
        }
    }
});

// Clear and focus input box
function clearAndFocus() {
    if (inputBox.value.trim() !== '') {
        inputBox.value = ''; // Clear the input value
    }
    inputBox.focus(); // Set focus to the input box
    inputBox.style.color = 'white';
}

// Input box event listeners
inputBox.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        submitBtn.click(); 
    }
});

inputBox.addEventListener('click', clearAndFocus);

inputBox.addEventListener('input', function() {
    if (inputBox.style.color !== 'white') {
        clearAndFocus(); // Clear and focus if color is not white
    }
});

// Animation for bubbly buttons
function animateButton(e) {
    e.preventDefault();
    // Reset animation
    e.target.classList.remove('animate');
    e.target.classList.add('animate');
    setTimeout(function() {
        e.target.classList.remove('animate');
    }, 700);
}

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
}

document.querySelector('.bubbly-button').addEventListener('click', function() {
    setTimeout(function() {
        window.location.href = '../index.html';
    }, 250);
});
