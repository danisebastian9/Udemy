const mongoose = require("mongoose")
const Schema = mongoose.Schema  // vamos a poder crear o definir modelos en codigo. 

const Meals = mongoose.model("Meal", new Schema({
    name: String,  // todos los objetos van a tener una propiedad se va a llamar name y va a ser tipo string. 
    desc: String,
})) 

module.exports = Meals // Exportamos nuestro modulo creado. 