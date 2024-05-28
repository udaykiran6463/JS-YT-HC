const tinderUser = new Object()
tinderUser.id = "123abc"
tinderUser.name = "sam"
tinderUser.isLoggedin = false
console.log(tinderUser);


const regularUser = {
    email:"sam@email.com",
    fullname:{
        userfullname:{
            firstname:"uday",
            middlename:"kiran",
            lastname:"pillalamarri"
        }
    }
}

console.log(regularUser);
console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {
    "name":"uday",
    "age":22
}

const obj2 = {
    "branch":"cse",
    "cgpa":8
}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1, ...obj2}
console.log(obj3)



const course = {
    courseName: "JS in Hindi",
    price: 1000,
    courseInstructor:"Hitesh"
}
const {courseInstructor} = course  //extract courseInstructor 
const {courseInstructor: instructor} = course  //extract courseInstructor into instructor
console.log(courseInstructor)//Hitesh
console.log(instructor) //Hitesh
