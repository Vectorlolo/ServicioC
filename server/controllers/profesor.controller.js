const Profesor = require('../models/profesor');

const profesorCtrl = {};

profesorCtrl.getProfesores = async(req, res) => {
    Profesor.find()
        .then((profesores) => {
            res.json(profesores);
           // console.log(profesores)
        })
        .catch((err) => {
            res.json(err);
        })
}

profesorCtrl.getProfesor = async(req, res) => {
    await Profesor.findOne({ ci_profesor: req.params.id })
        .then((profesor) => {
            res.json(profesor)
        })
        .catch((err) => {
            res.json(err)
        })
}

profesorCtrl.createProfesor = async(req, res) => {
    const profesor = new Profesor({
        ci_profesor: req.body.ci_profesor,
        n_profesor: req.body.n_profesor,
        a_profesor: req.body.a_profesor,
        tipo: req.body.tipo,
        estado:req.body.estado
    });
    console.log("profeosor: " + profesor)
    await profesor.save()
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


profesorCtrl.updateProfesor = async(req, res) => {
    let profesor = {
        ci_profesor: req.body.ci_profesor,
        n_profesor: req.body.n_profesor,
        a_profesor: req.body.a_profesor,
        tipo: req.body.tipo,
        estado:true
    }

    Profesor.findOneAndUpdate({ ci_profesor: req.params.id }, { $set: profesor })
        .then((profesor) => {
            res.json(profesor)
        })
        .catch((err) => {
            res.json(err)
        })
}

profesorCtrl.deleteProfesor = async(req, res) => {
    let id = req.params.id
let cambiarEstado={
    estado:false
}

    Profesor.findOneAndUpdate(id,cambiarEstado,{new:true})
        .then(() => {
            res.json({
                'status': true,
                'profesor':req.params.id
            })
        })
        .catch((err) => {
            res.json({ 'status': false })
        })
}

module.exports = profesorCtrl