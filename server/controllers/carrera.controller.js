const Carrera = require('../models/carrera');
const jwt = require('jsonwebtoken')
const carreraCtrl = {};

carreraCtrl.getCarreras =  (req, res) => {
    Carrera.find()
        .then((carreras) => {
            res.json(carreras);
            //console.log(carreras)
        })
        .catch((err) => {
            res.json(err);
            console.log(err)
        })
}

carreraCtrl.getCarrera = async(req, res) => {
    await Carrera.findOne({ codigo_c: req.params.id })
        .then((carrera) => {
            res.json(carrera)
        })
        .catch((err) => {
            res.json(err)
        })
}

carreraCtrl.createCarrera = async(req, res) => {
    const carrer = new Carrera({
        codigo_c:req.body.codigo_c,
        carrera: req.body.carrera,
        turno:req.body.turno,
    })

    await carrer.save()
        .then(() => {
            res.status(200);
            res.json({
                'status': true
            })
        })
        .catch((err) => {
            console.log(err)
            res.json({
                'status': err
            })
        })
}


carreraCtrl.updateCarrera = (req, res) => {
    let carrera = {
        codigo_c:req.body.codigo_c,
        carrera: req.body.carrera,
        turno:req.body.turno,
    }
    Carrera.findOneAndUpdate({ codigo_c: req.params.id }, { $set: carrera }) //revisar
        .then((carrera) => {
            res.json(carrera)
        })
        .catch((err) => {
            res.json(err)
        })
}

carreraCtrl.deleteCarrera = async(req, res) => {
    
    Carrera.findOneAndDelete({codigo_c: req.params.id})
    .then(()=>{
        res.json({status:'ok'})
    })
    .catch((err)=>{
        res.json(err)
    })
}


module.exports = carreraCtrl

function verifyToken(req,res,next){
    if(!req.headers.authorization){
        return res.status(401).send('Unauthorization request')
    }

    const token = req.headers.authorization.split(' ')[1]

    if(token === 'null'){
        return res.status(401).send('Autorizacion request')
    }

   const payload = jwt.verify(token,'secretkey')
    req.userId = payload._id
    next()
}