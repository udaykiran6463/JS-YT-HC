
const marvel_heros = ["thor","ironman","hulk"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(dc_heros);

// how to merge two arrays
// concat
const heros = marvel_heros.concat(dc_heros)
console.log(heros);

// using spread operator
const allNewHeros = [...marvel_heros, ...dc_heros] //we can merge more than 2 arrays into one
console.log(allNewHeros);

// flat -- flatting the mutlidimentional array -- return 1d array after flattering the array
const another_array = [1,2,3,[4,5,6],7,[1,2,[3,4]], 10]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

// .isArray() -- array or not -- return true or false based on the input

// .from() -- convert the string into the array --return empty array when input is object
