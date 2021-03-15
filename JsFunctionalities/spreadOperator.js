// SPREAD OPERATOR to evaluate Arrays In-place:
/*
    ES6 introduces the spread operator, which allows us to expand arrays 
    and other expressions in places where multiple parameters or elements are expected.
*/

//The ES5 code below uses apply() to compute the maximum value in an array:
let arr = [6, 89, 3, 45];
let maximus = Math.max.apply(null, arr); // returns 89
/*
    We had to use Math.max.apply(null, arr) because Math.max(arr) returns NaN. 
    Math.max() expects comma-separated arguments, but not an array. 
    The spread operator makes this syntax much better to read and maintain.
*/

const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr); // returns 89
/*
    ...arr returns an unpacked array. In other words, it spreads the array. However, 
    the spread operator only works in-place, like in an argument to a function or in an array literal. 
    The following code will not work:
const spreaded = ...arr; // will throw a syntax error
*/


// EXERCISE: 
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
arr2 = [...arr1];  // variable arr1 was copied to variable arr2 using the spread operator.

console.log(arr2); // ['JAN', 'FEB', 'MAR', 'APR', 'MAY']

// EXERCISE2: Add elements from an existing array into a new array

let certsToAdd = ["Cert1", "Cert2", "Cert3"];
let certifications = ["Cert4", ...certsToAdd, "Cert5", "Cert6"];
console.log(certifications) // [ 'Cert4', 'Cert1', 'Cert2', 'Cert3', 'Cert5', 'Cert6' ]

// EXERCISE3: Pass elements of an array as arguments to a function. 
function addThreeNumbers(argument1,argument2,argument3) {
    console.log(argument1 + argument2 + argument3)
}
const argumentsFinal = [2,3,4];
addThreeNumbers(...argumentsFinal); // 9

// EXERCISE4: Copy Arrays.
const arr = [1, 2, 3, 4];
const arr2 = [...arr]; // will copy the arr1 array to arr2
arr2.push(6);
console.log(arr2); // [1, 2, 3, 4, 6]   modification will just be applied to the copied array. 

// EXERCISE5: Concatenate arrays. 
const arr1 = [0, 1, 2, 3];
const arr2 = [5, 6, 7, 8];
arr1.concat(arr2); // concatenates arr2 to arr1:    [0, 1, 2, 3, 5, 6, 7, 8]
arr1 = [...arr1, ...arr2]; // Spread operator way:  [0, 1, 2, 3, 5, 6, 7, 8]

