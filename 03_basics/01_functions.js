function sayMyName (){
    console.log("u");
    console.log("d");
    console.log("a");
    console.log("y");
}

sayMyName()


function AddTwoNumbers(num1, num2){
    if(typeof num1 != 'number' || typeof num2 != 'number'){
        return "Pass number type values"
    }
    console.log(num1+num2);
    return num1+num2
}

console.log(AddTwoNumbers(3,4))
console.log(AddTwoNumbers(3,null))



function calculateCartPrice(...cartItems){
    console.log(cartItems)
    let totalPrice = 0
    cartItems.forEach(item => {
        const itemPrice = item
        totalPrice = totalPrice + itemPrice
    });
    return totalPrice
}

console.log(calculateCartPrice(1,2,3,4,5,6,7,8,9,10));