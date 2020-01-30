const Estudiante = require('../models/estudiante');

const estudianteCtrl = {};

estudianteCtrl.getEstudiantes = async(req, res) => {
    Estudiante.find()
        .then((estudiante) => {
            res.json(estudiante);
        })
        .catch((err) => {
            res.json(err);
        })
}

estudianteCtrl.getEstudiante = async(req, res) => {
    await Estudiante.findOne({ ci_estudiante: req.params.id })
        .then((estudiante) => {
            res.json(estudiante)
        })
        .catch((err) => {
            res.json(err)
        })
}

estudianteCtrl.createEstudiante = async(req, res) => {
    const estudiante = new Estudiante({
        ci_estudiante: req.body.ci_estudiante,
        n_estudiante: req.body.n_estudiante,
        a_estudiante: req.body.a_estudiante,
        semestre: req.body.semestre,
        turno: req.body.turno,
        carrera: req.body.carrera,
        tutor: req.body.tutor,
        tutor_c: req.body.tutor_c,
        n_expediente: req.body.n_expediente,
        nom_proyecto: req.body.nom_proyecto,
        direccion: req.body.direccion,
        aprobado: req.body.aprobado
    });

    await estudiante.save()
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


estudianteCtrl.updateEstudiante = async(req, res) => {
    let estudiante = {
        ci_estudiante: req.body.ci_estudiante,
        n_estudiante: req.body.n_estudiante,
        a_estudiante: req.body.a_estudiante,
        semestre: req.body.semestre,
        turno: req.body.turno,
        carrera: req.body.carrera,
        tutor: req.body.tutor,
        tutor_c: req.body.tutor_c,
        n_expediente: req.body.n_expediente,
        nom_proyecto: req.body.nom_proyecto,
        direccion: req.body.direccion,
        aprobado: req.body.aprobado
    }

    Estudiante.findOneAndUpdate({ ci_estudiante: req.params.id }, { $set: estudiante })
        .then((estudiante) => {
            res.json(estudiante)
        })
        .catch((err) => {
            res.json(err)
        })
}

estudianteCtrl.deleteEstudiante = async(req, res) => {
    Estudiante.findOneAndDelete({ ci_estudiante: req.params.id })
        .then(() => {
            res.json({
                'status': true
            })
        })
        .catch((err) => {
            res.json({ 'status': false })
        })
}

module.exports = estudianteCtrl