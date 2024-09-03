const container = document.querySelector('.container');
const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
let intervalId;

function getPastelColor() {
    const red = Math.floor((Math.random() * 127) + 127); // 127 to 254
    const green = Math.floor((Math.random() * 127) + 127); // 127 to 254
    const blue = Math.floor((Math.random() * 127) + 127); // 127 to 254

    return `rgb(${red}, ${green}, ${blue})`; // Using RGB format for simplicity
}

function changebg() {
    const randomColor = getPastelColor();
    console.log(randomColor);
    container.style.backgroundColor = randomColor;
}

start.addEventListener('click', function() {
    if (!intervalId) { // Prevent multiple intervals from being set
        intervalId = setInterval(changebg, 750);
    }
});

stop.addEventListener('click', function() {
    console.log('stopped');
    clearInterval(intervalId);
    intervalId = null; // Reset intervalId to allow restarting
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
