const mongoose =  require('mongoose');
const {Schema} = mongoose

ConstanciaSchema = new Schema({
    ci_profesor:{type:String,unique:true,required:true},
    labor:{type:Array}
})

module.exports = mongoose.model('Constancia',ConstanciaSchema)