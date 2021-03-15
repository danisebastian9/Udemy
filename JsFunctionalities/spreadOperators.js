const a = { b: 1}
const b = a 
b === a // true
b.c = 2 
console.log(b); // { b: 1, c: 2}
console.log(a); // { b: 1, c: 2}

const c = { ...a } // crea una copia de A sin cambiarla
console.log(c); // { b: 1, c: 2}
c.d = 12
console.log(c); // { b: 1, c: 2, d: 12}
console.log(a); // { b: 1, c: 2} didn't change as it was a copy not the original one changed. 

