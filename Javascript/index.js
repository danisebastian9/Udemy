console.log("Hello World")

// Data types in Javascript
/* String: chain of characters. "a" "hola" "hola Mundo" "hello"
    Boolean: true false.
    Null: No value, refers to an empty variable. 
    Number: Any number 1234568790
    "123" is a string. 123 is a number. 
    undefined: a variable that's not defined
    object: any combination of data saved as structure. 
*/


/* Variables definition: 
    var: will go until the top of the file in order to run the variable
    let: 
    const
*/

let miPrimeraVariable = "Mi first variable"
console.log(miPrimeraVariable);

//mutable
miPrimeraVariable = "This have changed"
console.log(miPrimeraVariable);

//Boolean
let myBoolean = true
let myOtherBool = false

//Numbers
let myNumber = 0
let myNumber2 = 12
let myNumber3 = -258

console.log(myNumber, myNumber2, myBoolean, miPrimeraVariable);

//Undefined
let undef 
console.log(undef);

let nulo = null
console.log(nulo);

//Objects
// Agrupacion de datos, estos datos hacen sentido entre si. 

// Empty Object
const miPrimerObjeto = {}

//Object:
const myObject = {
    aNumber: 12,
    aString: "A chain of strings",
    aCondition: true,
}
console.log(myObject);
console.log(myObject.aNumber);