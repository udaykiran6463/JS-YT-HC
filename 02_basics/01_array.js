// Array
let myArr = [0, 1, 2, 3, 4, 5]
// let myArr1 = new Array(0,1,2,3,4,5)
// console.log(myArr)
// console.log(myArr1)

// console.log(typeof myArr)
// console.log(typeof myArr1)

// Methods - Arrays
// push
myArr.push(22)
console.log(myArr)

// pop
myArr.pop()
console.log(myArr)

// unshift -- insert at start of the array
myArr.unshift(9)
console.log(myArr)

// shift -- delete at the start of the array
myArr.shift()
console.log(myArr)

// join -- will bind the array then convert to the string
const newArr = myArr.join()
console.log(newArr); //1,2,3,4,5
console.log(typeof newArr); //string

// slice
console.log(myArr.slice(1,3));

// splice
console.log(myArr.splice(1,3))
console.log(myArr);


// what is the differernce between the splice and slice
/*
In JavaScript, `slice()` and `splice()` are both methods used to manipulate arrays, but they serve different purposes:

1. `slice()`: This method returns a shallow copy of a portion of an array into a new array object. It doesn't modify the original array; instead, it creates a new array containing elements from the original array.

   Syntax: `array.slice(start, end)`

   - `start`: The beginning index of extraction. It's inclusive.
   - `end`: The ending index of extraction. It's exclusive.

   Example:

   ```javascript
   const array = [1, 2, 3, 4, 5];
   const slicedArray = array.slice(1, 4);
   console.log(slicedArray); // Output: [2, 3, 4]
   console.log(array); // Output: [1, 2, 3, 4, 5] (original array remains unchanged)
   ```

2. `splice()`: This method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. It directly modifies the original array.

   Syntax: `array.splice(start, deleteCount, item1, item2, ...)`

   - `start`: The index at which to start changing the array.
   - `deleteCount`: The number of elements to remove from the array (optional). If set to 0, no elements will be removed.
   - `item1, item2, ...`: The elements to add to the array at the `start` index (optional).

   Example:

   ```javascript
   const array = [1, 2, 3, 4, 5];
   array.splice(1, 2); // Removes 2 elements starting from index 1
   console.log(array); // Output: [1, 4, 5]

   const array2 = [1, 2, 3, 4, 5];
   array2.splice(2, 1, 'a', 'b'); // Removes 1 element starting from index 2 and adds 'a' and 'b'
   console.log(array2); // Output: [1, 2, 'a', 'b', 4, 5]
   ```

In summary, `slice()` is used to extract a portion of an array without modifying the original array, while `splice()` is used to modify the original array by removing, replacing, or adding elements.
*/




// -----------------------------------------------------------------------------------------------
