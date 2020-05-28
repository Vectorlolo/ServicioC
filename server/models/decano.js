const mongoose = require('mongoose');

const { Schema } = mongoose

DecanoSchema = new Schema({
    nombramiento:{type:String,required:true},
    fecha:{type:String,required:true},
    nombre:{type:String,required:true},
    apellido:{type:String,required:true},
    rango:{type:String,required:true}
})

module.exports = mongoose.model('Decano',DecanoSchema)