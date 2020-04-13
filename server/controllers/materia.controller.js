const Materia = require('../models/materia');

materiaCtrl = {};

materiaCtrl.getMaterias = (req,res) =>{
    Materia.find({ estado: true })
    .then((materias)=>{
        res.json(materias),
        res.status(200)
    })
    .catch((err)=>{
        res.json(err)
    })
}

materiaCtrl.getMateria = (req,res) =>{
    Materia.findOne({codigo_materia:req.params.id})
    .then((materia)=>{
        res.json(materia)
        res.status('OK')
    })
    .catch((err)=>{
        res.json(err)
    })
}


materiaCtrl.createMateria = async(req,res) =>{
    let materia = new Materia({
        codigo_materia: req.body.codigo_materia,
        nombre_mat: req.body.nombre_mat,
        horas_teo: req.body.horas_teo,
        horas_pra: req.body.horas_pra,
        horas_lab: req.body.horas_lab,
        carrera:req.body.carrera,
        estado:req.body.estado
    })

    await materia.save()
    .then(()=>{
        console.log(materia)
        res.json({status:'ok'})
        res.status(200)
    })
    .catch((err)=>{
        res.json(err)
    })
}

materiaCtrl.updateMateria = (req,res)=>{
    const materia = {
        codigo_materia: req.body.codigo_materia,
        nombre_mat: req.body.nombre_mat,
        horas_teo: req.body.horas_teo,
        horas_pra: req.body.horas_pra,
        horas_lab: req.body.horas_lab,
        carrera:req.body.carrera,
        estado:true
    }

    Materia.findOneAndUpdate({codigo_materia:req.params.id},{$set:materia})
    .then((materia)=>{
        res.json(materia)
        res.status(200)
    })
    .catch((err)=>{
        res.json(err)
    })
}

materiaCtrl.deleteMateria = (req,res)=>{
    let id = req.params.id

    let cambiarEstado={
        estado:false
    }

    Materia.findOneAndUpdate(id,cambiarEstado,{new:true})
    .then((materia)=>{
        res.json(materia)
        res.status(200)
    })
    .catch((err)=>{
        res.json(err)
    })
}



/* materiaCtrl.getMateriasCa = (req,res) =>{  // HAcer que esto traiga las materias donde la carrera sea la que mando
    Materia.find({ carrera: [1123] })
    .then((materia)=>{
        console.log(materia)
        res.json(materia)
        res.status(200)
    })
    .catch((err)=>{

        res.json(err)
    })
} */

module.exports = materiaCtrl