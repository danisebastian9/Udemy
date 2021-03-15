function sumar(a, b, cb) {
    const r = a +b
    cb(r)
}

sumar(2, 3, function(r) {
    console.log("Soy una funcion anonima y mi resultado es:", r)
})