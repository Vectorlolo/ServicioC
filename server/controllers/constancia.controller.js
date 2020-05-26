const Constancia = require('../models/constancia');
const Profesor = require('../models/profesor')

constanciaCtrl = {};

constanciaCtrl.getConstancias = (req,res) =>{
    Constancia.find({})
    .then((constancias)=>{
        res.json(constancias),
        res.status(200)
        console.log(constancias)
    })
    .catch((err)=>{
        res.json(err)
    })
}

constanciaCtrl.getConstancia = (req,res) =>{
    Constancia.findOne({ci_profesor:req.params.id})
    .then((constancia)=>{
        res.json(constancia),
        res.status(200)
    })
    .catch((err)=>{
        res.json(err)
    })
}

constanciaCtrl.createConstancia = async(req,res)=>{
    let constancia = new Constancia({
        ci_profesor:req.body.ci_profesor,
        labor:req.body.labor
    })
    await constancia.save()
    .then(()=>{
        res.json({status:true})
        res.status(200)
    })
    .catch((err)=>{
        res.json(err)
    })
}

constanciaCtrl.updateConstancia = (req,res) =>{
    const constancia = {
        ci_profesor:req.body.ci_profesor,
        labor:req.body.labor
    }
    Constancia.findOneAndUpdate({ci_profesor:req.params.id},{$set:constancia})
    .then((constancia)=>{
        res.json({status:true})
        res.status(200)
    })
    .catch((err)=>{
        res.json(err)
    })
}

constanciaCtrl.deleteConstancia = async(req,res)=>{
    Constancia.findOneAndDelete({ci_profesor:req.params.id})
    .then((ok)=>{
        res.json({status:'ok'})
    })
    .catch((err)=>{
        res.json(err)
    })
}

module.exports = constanciaCtrl