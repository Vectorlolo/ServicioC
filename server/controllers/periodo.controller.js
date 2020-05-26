const Periodo = require('../models/periodo');

const periodoCtrl = {};

periodoCtrl.getPeriodos = (req,res) =>{
    Periodo.find()
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
        semana:req.body.semana
    })

    await periodo.save()
    .then(()=>{
        
        res.json({status:true})
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
        semana:req.body.semana

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
    Periodo.findOneAndDelete({_id:req.params.id})
    .then((ok)=>{
        res.json({status:'ok'})
    })
    .catch((err)=>{
        res.json(err)
    })
}

module.exports = periodoCtrl