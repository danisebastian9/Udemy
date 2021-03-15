// comparison operators: 

// Igual e igual stricto
const igual1 = 5 === 6
const igual2 = 5 == 6
const igual3 = 5 == 5
const igual4 = 5 == "5"
const igual5 = 5 === "5"


console.log(igual1); // false
console.log(igual2); // false
console.log(igual3); // true
console.log(igual4); // true
console.log(igual5); // false

// Menor que:
const menorQue1 = 5 < 6
const menorQue2 = 5 < 5

console.log(menorQue1, menorQue2); // true false

// Mayor que: 
const mayorQue1 = 5 > 6 
const mayorQue2 = 5 > 4

console.log(mayorQue1, mayorQue2); // false true

// menor o igual:
const menorIgual1 = 5 <= 5 
const menorIgual2 = 5 <= 6

console.log(menorIgual1, menorIgual2); // true true

// mayor o igual:
const mayorIgual1 = 5 >= 5 
const mayorIgual2 = 5 >= 6

console.log(mayorIgual1, mayorIgual2); // true false

// desigual y desigual stricto
const desigual1 = 5 !== 6
const desigual2 = 5 != 6
const desigual3 = 5 != 5
const desigual4 = 5 != "5"
const desigual5 = 5 !== "5"


console.log(desigual1); // true
console.log(desigual2); // true
console.log(desigual3); // false
console.log(desigual4); // false
console.log(desigual5); // true
