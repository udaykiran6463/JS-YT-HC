let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// let myCreatedDate = new Date(2023,0,23);
// let myCreatedDate = new Date(2023,0,23,5,3);
// let myCreatedDate = new Date("2024-12-22");
let myCreatedDate = new Date("12-22-2001");
// let myCreatedDate = new Date("22-12-2001");
console.log("created date object" + myCreatedDate);
console.log(myCreatedDate.toString());

let myTimeStamp = Date.now();
console.log("date.now()" + myTimeStamp);   
console.log(myCreatedDate.getTime());
// to convert the time in secondes as these are in milliseconds so we divide by 1000 to convert to seconds
console.log(Math.round(Date.now()/1000))

const days = {
    0: "Monday",
    1: "Tuesday",
    2: "Wednesday",
    3: "Thursday",
    4: "Friday",
    5: "Saturday",
    6: "Sunday"
};


let dateNow = new Date()
console.log(`${dateNow.getDate()}-${dateNow.getMonth()}-${dateNow.getFullYear()}  ${days[dateNow.getDay()-1]}`)