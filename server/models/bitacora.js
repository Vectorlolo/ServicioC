const mongoose = require('mongoose');

const { Schema } = mongoose;

const BitacoraSchema = new Schema({
    usuario:{type:String,require:true},
    accion:{type:String,require:true},
    fecha:{type:String,require:true}
})

module.exports = mongoose.model('Bitacora',BitacoraSchema)