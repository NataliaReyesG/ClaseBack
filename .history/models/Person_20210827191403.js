const mongoose = require('mongoose')
const { Schema } = mongoose

const personSchema = new Schema(
    {
        name: {type: String, required: true},
        lastName: {type: String, required: true},
        age: {type: Number, required: true},
        dni: {type: String, required: true}
    },
    {
        versionKey: false, // llave de la version de la aplicacion
        timestamps: true // guardar la fecha de cracion y actualizacion
    }
);

module.exports = mongoose.model("Person", personSchema);