const mongoose = require('mongoose')
const { Schema } = mongoose;


const ProfesorSchema = new Schema({

    ci_profesor: { type: String, required: true, unique: true },
    n_profesor: { type: String, required: true },
    a_profesor: { type: String, required: true },
    tipo: { type: String,enum:['TV','MC','DE','XD'], required: true },
    estado:{type:Boolean, default:true}

});

module.exports = mongoose.model('Profesor', ProfesorSchema)