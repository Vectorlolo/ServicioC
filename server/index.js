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
app.use('/api/constancia',require('./routes/constancia.routes'))
app.use('/api/bitacora',require('./routes/bitacora.routes'))
app.use('/api/decano',require('./routes/decano.routes'))
//inicio server
app.listen(app.get('port'), () => {
    console.log("Server en el puerto ", app.get('port'));
});






///////////////////////////////////////////////////////
//////////////////////Generar Pdf//////////////////////
///////////////////////////////////////////////////////
// Define font files
/* var fonts = {
    Roboto: {
      normal: 'fonts/Roboto-Regular.ttf',
      bold: 'fonts/Roboto-Medium.ttf',
      italics: 'fonts/Roboto-Italic.ttf',
      bolditalics: 'fonts/Roboto-MediumItalic.ttf'
    }
  };
  
  var PdfPrinter = require('pdfmake');
  var printer = new PdfPrinter(fonts);
  var fs = require('fs');
  
  var docDefinition = {
    // ...
  };
  
  var options = {
    // ...
  }
  
  var pdfDoc = printer.createPdfKitDocument(docDefinition, options);
  pdfDoc.pipe(fs.createWriteStream('document.pdf'));
  pdfDoc.end(); */