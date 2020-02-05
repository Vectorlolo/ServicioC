const Carrera = require('../models/carrera');

const carreraCtrl = {};

carreraCtrl.getCarreras = async(req, res) => {
    Carrera.find()
        .then((carreras) => {
            res.json(carreras);
            console.log(carreras)
        })
        .catch((err) => {
            res.json(err);
        })
}

carreraCtrl.getCarrera = async(req, res) => {
    await Carrera.finOne({ carrera: req.params.id })
        .then((carrera) => {
            res.json(carrera)
        })
        .catch((err) => {
            res.json(err)
        })
}

carreraCtrl.createCarrera = async(req, res) => {
    const carrer = new Carrera({

        carrera: req.body.carrera
    })

    await carrer.save()
        .then(() => {
            res.status(200);
            res.json({
                'status': 'ok'
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
        carrera: req.body.carrera
    }
    Carrera.findOneAndUpdate({ carrera: req.params.id }, { $set: carrera }) //revisar
        .then((carrera) => {
            res.json(carrera)
        })
        .catch((err) => {
            res.json(err)
        })
}

carreraCtrl.deleteCarrera = async(req, res) => {
    console.log(req.params)
    let user = Carrera.findOneAndDelete({ carrera: req.params.id })
        .then(() => {
            res.json({
                'status': true,
                'carrera':req.param.id
            })
        })
        .catch(() => {
            res.json({
                'status': false
            })
        })
}


module.exports = carreraCtrl