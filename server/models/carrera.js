const mongoose = require('mongoose');

const { Schema } = mongoose;

const CarreraSchema = new Schema({
    codigo_c:{ type: String, require:true, unique:true},
    carrera: { type: String, require: true, unique: true },
    turno:{type:String, require:true ,enum:['D','N']},
});

module.exports = mongoose.model('Carrera', CarreraSchema)