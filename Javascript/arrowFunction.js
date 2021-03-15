// Fat arrow functions. 
// no se necesita utilizar la palabra function. 
// funciones arrow que tegan una sola linea no necesitan el
//  return ya que este se pone por default. 


// Arrow function de una sola linea sin return:
const miFatArrowFunction = (a, b) => a + b
const resultado = miFatArrowFunction(1, 3)
console.log(resultado);

// Arrow function de mas de una linea con return: 
const otraAF = (c, d) => {
    return c + d
}
const resultadoOtraAF =  otraAF(1, 3)
console.log(resultadoOtraAF);


