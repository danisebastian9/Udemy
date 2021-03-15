// Una alternativa para no llamar a return dentro de la funcion 
// Y aun asi poder seguirla asignando a la derecha de otra variable sin que resulte undefined. 
// Callback es una funcion que se va a iterar al final de una funcion. 
// Las funciones pueden ser pasadas como argumentos a otras funciones al ser consideradas valores. 

function sumar(a, b, cb) {
    const resultado = a + b
    cb(resultado)
}
function callback(result) {
    console.log("resultado", result)
}

sumar(2,3, callback)


// Ejemplo1

function callback() {
    console.log("Yo soy un callback");
}

function mensaje(fn) {
    fn();
}
mensaje(callback); // Yo soy un callback. 


// Ejemplo2 

//Regular way. 
function function1() {
    setTimeout(function() {
        console.log("mensaje 1");
    }, 1000);
}

function function2() {
    console.log("mensaje 2");
}

function1();
function2();


//Callback way: 
function function3(fn) {
    setTimeout(function() {
        console.log("mensaje 1");
        fn();
    }, 1000);
}

function function4() {
    console.log("mensaje 2");
}

function3(function4);
