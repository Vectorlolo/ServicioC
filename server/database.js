const mongoose = require('mongoose');

const URI = 'mongodb://localhost/servicio-comunitario'; //direccion de la DB

mongoose.connect(URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true

}) //asi se conecta mongodb a esta direccion, hay que exportalo
    .then(db => console.log(`BD esta conectada a ${ URI }`))
    .catch(err => console.log(err));

module.exports = mongoose;