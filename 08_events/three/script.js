const datePrint = function(str){
    console.log('uday',str,Date.now())
}

document.querySelector('#stop').addEventListener('click',function(){
    clearInterval(IntervalID)
})

document.querySelector('#start').addEventListener('click',function(){
    IntervalID = setInterval(datePrint,1000, "hi")
})