var express = require('express');
const morgan = require('morgan');
var app = express();
const { mongoose } = require('./database');

app.set('port', process.env.PORT || 3000); //Usa el puerto disponible


app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(express.json()); //El formato Json que se envia, es entendible por el servidor

//Rutas
app.use('/api/estudiantes', require('./routes/estudiante.routes')); //colocar ruta
app.use('/api/carrera', require('./routes/carrera.routes'))

//inicio server

app.listen(app.get('port'), () => {
    console.log("Server en el puerto ", app.get('port'));
});