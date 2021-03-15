const myObject = {
    aNumber: 12,
    aString: "This is a string chain",
    aCondition: true,
}

const arrVacio = []
const arr = [1, 2, 3, "hola", "mundo", myObject]

console.log(arrVacio, arr)

arr.push(5)
console.log(arr)

arrVacio.push(5)
arrVacio.push(24)
arrVacio.push(34)
arrVacio.push("My String")
arrVacio.push(true)
console.log(arrVacio)
