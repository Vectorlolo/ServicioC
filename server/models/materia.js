const mongoose = require('mongoose');

const {Schema} = mongoose;

MateriaShema = new Schema({
    codigo_materia: { type: String, required: true, unique: true },
    nombre_mat: { type: String, required: true, unique: true },
    horas_teo: { type: Number, required: true },
    horas_pra: { type: Number, required: true },
    horas_lab: { type: Number, required: true },
    carrera:{type:Array},
})

module.exports = mongoose.model('Materia',MateriaShema)

