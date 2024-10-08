const blocks = document.querySelectorAll(".block");
const body = document.querySelector("body");
const heading = document.querySelector(".heading");

// Define color styles to avoid repetitive code
const colorStyles = {
    "#8ACDD7": "black",
    "#F6F193": "black",
    "#AC87C5": "black",
    "#FD8A8A": "black"
};
blocks.forEach(block => {
    block.addEventListener('click', (e) => {
        const color = e.target.getAttribute("color");

        if (colorStyles[color]) {
            body.style.backgroundColor = color;
            e.target.style.border = "2px solid black";
            heading.style.color = "black";
        }

        blocks.forEach(block => {
            block.style.border = block.getAttribute("color") === color ? "2px solid black" : "none";
        });

        heading.style.textShadow = "0 0 2px white, 0 0 2px white, 0 2px 2px white, 0 -2px 2px black, 2px 0 2px white, -2px 0 2px white, 2px 2px 2px white, -2px -2px 2px white";
    });
});


var animateButton = function (e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');

    e.target.classList.add('animate');
    setTimeout(function () {
        e.target.classList.remove('animate');
    }, 700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
}

document.querySelector('.btn').addEventListener('click', function() {
    setTimeout(function() {
        window.location.href = '../index.html';
    }, 250);
});
