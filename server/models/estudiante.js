const mongoose = require('mongoose')
const { Schema } = mongoose;


const EstudianteSchema = new Schema({

    ci_estudiante: { type: String, required: true, unique: true },
    n_estudiante: { type: String, required: true },
    a_estudiante: { type: String, required: true },
    semestre: { type: String, required: true },
    turno: { type: String, enum: ["D", "N"], required: true },
    carrera: { type: String, required: true },
    tutor: { type: String, required: true },
    tutor_c: { type: String, required: true },
    n_expediente: { type: String, required: true },
    nom_proyecto: { type: String, required: true },
    direccion: { type: String, required: true },
    aprobado: { type: String }

});

module.exports = mongoose.model('Estudiante', EstudianteSchema)