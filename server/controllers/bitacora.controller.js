const Bitacora = require('../models/bitacora');

const bitacoractrl = {};

bitacoractrl.getBitacoras = async(req,res) => {
    Bitacora.find({})
    .then((bitacoras)=>{
        res.json(bitacoras)
    })
    .catch((err)=>{
        res.json(err);
    })
}

bitacoractrl.createBitacora  = async(req,res) =>{
    let fecha =new Date() 
    let month = fecha.getMonth()+1
    if(month < 10){
        month = '0' + month
      }
const bitacora = new Bitacora({
    usuario:req.body.usuario,
    accion:req.body.accion,
    fecha:fecha.getDate() + '-' + month + '-' + fecha.getFullYear() + ' Hora: ' + fecha.getHours()  + ':' + fecha.getMinutes()

    

})

await bitacora.save()
.then((ok)=>{
    res.status(200);
    res.json({
        'status': 'ok'
    })
    console.log(ok)

})
.catch((err) => {
    console.log(err)
    res.json({
        'status': err
    })
})
}


module.exports = bitacoractrl