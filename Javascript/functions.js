// Las funciones se utilizan para reusar el codigo de estas mismas solo llamando a la funcion.

function iterar() {
    const numeros = [1, 2, "Hola", 4, 5]
    for (let i = 0; i < numeros.length; i++) {
        console.log(numeros[i]);
    }
}

//iterar()
//iterar()

// Pasando variables como forma de parametros a argumento de funciones. 

function iterar1(argumento1) {
    for (let myLoop = 0; myLoop < argumento1.length; myLoop++) {
        console.log(argumento1[myLoop]);
    }
}
const misNumeros = [1, 2, "Hola", 4, 5]
const misNombres = ["Pedro", "Juan", "Felipe", "Chanchito Feliz", "Chanchito triste"]

//iterar1(misNumeros)
//iterar(misNombres)


// Mas Funciones.  Si la funcion no es retornada, llamarla desde afuera va a dar undefined. 

function suma(a, b) {
    console.log(a + b);
}
//suma(2, 3)


// Con Return
function suma1(a, b) {
    return a + b;
}
const resultadoSuma1 = suma1(2, 3)
const resultadoSuma2 = suma1(7, 5)
const resultadoSuma3 = suma1(resultadoSuma1, resultadoSuma2)
console.log("Resultado", resultadoSuma1);  // 2 + 3 = 5
console.log("Resultado", resultadoSuma2);    // 7 + 5 = 12
console.log("Resultado", resultadoSuma3);    // 5 + 12 = 17

