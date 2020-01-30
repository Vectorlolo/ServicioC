const Carrera = require('../models/carrera');

const carreraCtrl = {};

carreraCtrl.getCarreras = async(req, res) => {
    Carrera.find()
        .then((carreras) => {
            res.json(carreras);
        })
        .catch((err) => {
            res.json(err);
        })
}

carreraCtrl.getCarrera = async(req, res) => {
    await Carrera.finOne({ carrera: req.param.id })
        .then((carrera) => {
            res.json(carrera)
        })
        .catch((err) => {
            res.json(err)
        })
}

carreraCtrl.createCarrera = async(req, res) => {
    const carrera = new Carrera({

        carrera: req.body.carrera
    })

    await carrera.save()
        .then(() => {
            res.status(200);
            res.json({
                'status': 'ok'
            })
        })
        .catch((err) => {
            res.json(err)
        })
}


carreraCtrl.updateCarrera = (req, res) => {
    let carrera = {
        carrera: req.body.carrera
    }
    Carrera.findOneAndUpdate({ carrera: req.param.id }, { $set: carrera })
        .then((carrera) => {
            res.json(carrera)
        })
        .catch((err) => {
            res.json(err)
        })
}

carreraCtrl.deleteCarrera = (req, res) => {
    Carrera.findOneAndDelete({ carrera: req.param.id })
        .then(() => {
            res.json({
                'status': true
            })
        })
        .catch(() => {
            res.json({
                'status': false
            })
        })
}


module.exports = carreraCtrl