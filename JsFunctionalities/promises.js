// Promise es una const global, nos permite resolver de manera asincrona valores
Promise.resolve(2)
    .then(valor => console.log(valor)) //  2

Promise.resolve(2)
    .then(valor => valor + 1 )
    .then(valor => console.log(valor)) //  3


// catch va a recibir un mensaje de error para manejar el error.

Promise.reject(2)
    .then(valor => valor + 1 )
    .then(valor => console.log(valor))
    .catch(e =>console.error(e))

// Promesas irrumpiendo la cadena

Promise.reject(2)
    .then(valor => valor + 1 )
    .then(valor => Promise.reject(valor)) // se rechaza en cualquier parte de la promesa
    .catch(e =>console.error(e))

new Promise((resolve, reject) => {
    setTimeout(() => resolve(2), 1000)
}) 
.then(x => console.log(x))
.catch(e => console.error(e))
