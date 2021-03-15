const express = require("express")
const Orders = require("../models/Orders")
const { isAuthenticated, hasRoles } = require("../auth")

const router = express.Router()  // Router con R mayuscula

router.get("/", (req, res) => {
    Orders.find()                                // buscara todos los elementos dentro de la coleccion de Meals
    .exec()                                     // ejecutar la query y devolver una promesa
    .then(x => res.status(200).send(x) )        // Que es lo que queremos devolver al cliente(usuario), tenemos que devolver un codigo en este caso 200
})

router.get("/:id", (req, res) => {              // necesitamos recibir un parametro, en este caso "id"
    Orders.findById(req.params.id)               // request a la propiedad parametros, id
    .exec()
    .then(x => res.status(200).send(x)) 
})

router.post("/", isAuthenticated, (req, res) => {
    const { _id } = req.user
    Orders.create({ ...req.body, user_id: _id }).then(x => res.status(201).send(x))                             // Crear elementos basados en lo que se reciba por el body de la peticion. por medio de POST
})  // 201 = creado

router.put("/:id", isAuthenticated, hasRoles(["admin", "user"]), (req, res) => {      // hasRole("user")   1 role cases     // id para identificar el objeto a actualizar. 
    Orders.findOneAndUpdate(req.params.id, req.body)                                   // Encontrar un elemento por ID dentro de los parametros y req.body
    .then(() => res.sendStatus(204))
})

router.delete("/:id", isAuthenticated, (req, res) => {
    Orders.findOneAndDelete(req.params.id).exec().then(() => res.sendStatus(204))
})
module.exports = router