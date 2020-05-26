const mongoose = require("mongoose");
const {Schema} = mongoose


const PeriodoSchema = new Schema({

   // id:{type:String,required:true},//aqui vas a poner el año + el numero de periodo para que sea el id
    periodo:{type:String,required:true},
    inicio: {type:String,required:true},
    final:{type:String,required:true},
    semana:{type:Number,required:true}

});

module.exports = mongoose.model('Periodo',PeriodoSchema)