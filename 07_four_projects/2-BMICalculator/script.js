const form = document.querySelector(".input-form")
form.addEventListener('submit',function(e){
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')
    if(height=="" || height < 0 || isNaN(height)){
        result.value = "Please give a valid Height"
    }
    else if(weight=="" || weight < 0 || isNaN(weight)){
        result.value = "Please give a valid weight"
    }
    else{
        let h = height/100
        let bmi = (weight / (h*h)).toFixed(2)

        bmi  = String(bmi)

        if(bmi < 18.6){
            bmi += "-UnderWeight"
        }
        else if(bmi>=18.6 && bmi <= 24.9){
            bmi += '-Normal'
        }
        else{
            bmi+='-OverWeight'
        }
        result.value = bmi
    }

})




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
