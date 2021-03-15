const suma = 1 + 2
const restar = 1 - 2
const multiplicar = 2 * 3 
const division = 9 / 3

console.log(suma, restar, multiplicar, division)

const modulo = 10 % 3
console.log(modulo) // imprime el valor que sobra, 10 / 3 = 3,3,3 = 9. Sobra 1. 

// incrementar 1 numero: 
// const num = 5  En const no se puede cambiar el objeto, solo las propiedades del objeto
let num = 5
num++
num++
num++
num++
num++
console.log(num); // 10

// restar 1 numero: 
let numRest = 5
numRest--
numRest--
numRest--
console.log(numRest); // 2

// asignacion incrementar 1 o mas numeros
let numIncrement = 5
numIncrement += 5
console.log(numIncrement);

// asignacion restar 1 o mas numeros
let numDecrease = 8 
numDecrease -= 2
console.log(numDecrease);

// asignacion multiplicar 1 o mas numeros
let numMultiply = 4
numMultiply *= 3
console.log(numMultiply);

// asignacion division 1 o mas numeros
let numDivide = 8
numDivide /= 2
console.log(numDivide);