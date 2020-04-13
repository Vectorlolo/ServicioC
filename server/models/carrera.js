const mongoose = require('mongoose');

const { Schema } = mongoose;

const CarreraSchema = new Schema({
    codigo_c:{ type: String, require:true, unique:true},
    carrera: { type: String, require: true, unique: true },
    turno:{type:String, require:true ,enum:['D','N']},
    estado:{type:Boolean,default:true}
});

module.exports = mongoose.model('Carrera', CarreraSchema)