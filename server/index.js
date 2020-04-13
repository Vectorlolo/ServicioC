var express = require('express');
const morgan = require('morgan');
var app = express();
const cors = require('cors');

const { mongoose } = require('./database');

app.set('port', process.env.PORT || 3000); //Usa el puerto disponible


app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(express.json()); //El formato Json que se envia, es entendible por el servidor
app.use(cors({origin:'http://localhost:4200'}))


//Rutas
app.use('/api/profesor', require('./routes/profesor.routes')); //colocar ruta
app.use('/api/carrera', require('./routes/carrera.routes'))
app.use('/api/usuario', require('./routes/user.routes'))
app.use('/api/materia', require('./routes/materia.routes'))
app.use('/api/periodo',require('./routes/periodo.routes'))


//inicio server
app.listen(app.get('port'), () => {
    console.log("Server en el puerto ", app.get('port'));
});