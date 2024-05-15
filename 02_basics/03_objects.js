const mySym = Symbol("key1")
// object literals
const jsUser = {
    name:"Uday",
    age: 22,
    location:"Hyderabad",
    email:"udaykiran6463@gmail.com",
    isLogged:false,
    lastLoginDays:["monday","friday"],
    [mySym]:"mykey1"
}

// jsUser.email = "uk@gmail.com"  //changing the key-value
// // Object.freeze(jsUser)
// jsUser.email = "udaykiran6463@gmail.com"
// console.log(jsUser)


jsUser.greeting = function(){
    console.log("Hellow js User");
}
jsUser.greeting2 = function(){
    console.log(`good morning to ${this.name}`);
}
console.log(jsUser.greeting)
console.log(jsUser.greeting())
jsUser.greeting2()



