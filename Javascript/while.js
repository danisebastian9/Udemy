// va a itinerar infinitamente si no hay una condicion que la detenga

let x = 0

while (x < 5) {
    console.log(x)
    x++
}
console.log("Terminando loop")

let z = true 
while (z) {
    console.log(z);
    z = false
}
console.log("Termino el loop") // el valor tre se imprime una vez, luego el loop lo cambia a false y se termina el loop.

