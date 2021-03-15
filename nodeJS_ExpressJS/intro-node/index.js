const express =  require('express') // importa express. 
const app = express()  //hay que llamar a express. 

app.get("*", (request, response) => {
    response.send({ message: "Chanchito feliz" })
})

app.listen(3000, () => console.log("Nuestro servidor esta escuchando en el puerto 3000"))  
// empezar servidor, para que corra hay que poner este codigo, y puertos pueden ser: 3000, 8000, 8080.

