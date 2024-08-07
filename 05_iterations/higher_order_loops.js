const arr = [1,2,3,4,5,6,7,8,9]

for (const element of arr) {
    console.log(element);
}

const greet = "HelloWorld"
for (const element of greet) {
    console.log(element);   
}


// maps
const map1 = new Map()
map1.set(1,'india')
map1.set(2,'usa')
map1.set(3,'uk')
console.log(map1);

for (const element of map1) {
    console.log(element[0], element[1]);
}
