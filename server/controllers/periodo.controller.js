const Periodo = require('../models/periodo');

const periodoCtrl = {};

periodoCtrl.getPeriodos = (req,res) =>{
    Periodo.find({estado:true})
    .then((periodos)=>{
        //console.log(periodos)

        res.json(periodos),
        res.status(200)
    })
    .catch((err)=>{
        res.json(err)
    })
}

periodoCtrl.getPeriodo = (req,res)=>{
    Periodo.findOne({_id:req.params.id})
    .then((periodo)=>{
        console.log(periodo)
        res.json(periodo)
        res.status('Ok')
    })
    .catch((err)=>{
        res.json(err)
    })
}

periodoCtrl.createPeriodo = async(req,res) =>{
    let periodo = new Periodo({
        //id:req.body.id,
        periodo:req.body.periodo,
        inicio: req.body.inicio,
        final:req.body.final,
        estado:req.body.estado
    })

    await periodo.save()
    .then(()=>{
        console.log(materia)
        res.json({status:'ok'})
        res.status(200)
    })
    .catch((err)=>{
        res.json(err)
    })
}

periodoCtrl.updatePeriodo = (req,res)=>{
    const periodo = {
        //id:req.body.id,
        periodo:req.body.periodo,
        inicio: req.body.inicio,
        final:req.body.final,
        estado:true
    }
    Periodo.findOneAndUpdate({_id:req.params.id},{$set:periodo})
    .then((materia)=>{
        res.json(materia)
        res.status(200)
    })
    .catch((err)=>{
        res.json(err)
    })
}

periodoCtrl.deletePeriodo = (req,res) =>{
    let id = req.params.id
    let cambiarEstado = {
        estado:false
    }
    Periodo.findOneAndUpdate(id,cambiarEstado,{new:true})
    .then((materia)=>{
        res.json(materia)
        res.status(200)
    })
    .catch((err)=>{
        res.json(err)
    })
}

module.exports = periodoCtrl