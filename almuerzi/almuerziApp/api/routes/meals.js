const express = require("express")
const Meals = require("../models/Meals")

const router = express.Router()  // Router con R mayuscula

router.get("/", (req, res) => {
    Meals.find()                                    // buscara todos los elementos dentro de la coleccion de Meals
        .exec()                                     // ejecutar la query y devolver una promesa
        .then(x => res.status(200).send(x))         // Que es lo que queremos devolver al cliente(usuario), tenemos que devolver un codigo en este caso 200
})

router.get("/:id", (req, res) => {              // necesitamos recibir un parametro, en este caso "id"
    Meals.findById(req.params.id)               // request a la propiedad parametros, id
        .exec()
        .then(x => res.status(200).send(x)) 
})

router.post("/", (req, res) => {
    Meals.create(req.body).then(x => res.status(201).send(x))                             // Crear elementos basados en lo que se reciba por el body de la peticion. por medio de POST
})  // 201 = creado

router.put("/:id", (req, res) => {              // id para identificar el objeto a actualizar. 
    Meals.findOneAndUpdate(req.params.id, req.body)  // Encontrar un elemento por ID dentro de los parametros y req.body
    .then(() => res.sendStatus(204))
})

router.delete("/:id", (req, res) => {
    Meals.findOneAndDelete(req.params.id).exec().then(() => res.sendStatus(204))
})

module.exports = router