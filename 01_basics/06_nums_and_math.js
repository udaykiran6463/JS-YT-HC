const score = 400.000
console.log(score)
console.log(typeof score)

const balance = new Number(100)
console.log(balance)
console.log(typeof balance)


console.log(balance.toString().length);
console.log(score);
console.log(score.toFixed(3));
console.log(score.toFixed(2));
console.log(score.toFixed(1));
console.log(score.toFixed(0));



console.log("-----------------------------------");

const otherNumber = 148.45
console.log(otherNumber.toPrecision(2));








// +++++++++++++++++++++++++++++++++++++++----MATH---++++++++++++++++++++++++++++++++++++

// Math.abs(-34)
// Math.round(3.4)
// Math.ceil(3.4)
// Math.floor(3.4)
// Math.min(4,5,6,7)
// Math.max(4,5,6,7)
console.log(Math.round((Math.random()*10)%6) + 1)


const min = 55
const max = 123

console.log(Math.floor(Math.random() * (max-min+1)) + min)