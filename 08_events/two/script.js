// setTimeout(function(){
//     console.log("settimeout after 2000millisec or 2sec");
// },2000)


// setInterval(function(){
//     const now = new Date();
//     const hours = now.getHours().toString().padStart(2, '0');
//     const minutes = now.getMinutes().toString().padStart(2, '0');
//     const seconds = now.getSeconds().toString().padStart(2, '0');
//     const currentTime = `${hours}:${minutes}::${seconds}`;
//     console.log("setIntervel, execulte every 2000millisec or 2sec",currentTime);
// },3000)

function changeText(){
    const h1 = document.querySelector('h1');
    h1.innerHTML = "uday kiran";
    console.log("title changed");    
}

const timeoutID = setTimeout(changeText, 3000);

document.querySelector('#stop').addEventListener('click',function(){
    clearTimeout(timeoutID)
    console.log("Stopped the changeText");
})
