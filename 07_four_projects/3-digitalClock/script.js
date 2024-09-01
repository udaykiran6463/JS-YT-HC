const clock = document.getElementById("class")
setInterval(function(){
    let date = new Date()
    clock.innerHTML = date.toLocaleTimeString()
},999)




























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

document.querySelector('.bubbly-button').addEventListener('click', function() {
    setTimeout(function() {
        window.location.href = '../index.html';
    }, 250);
});
