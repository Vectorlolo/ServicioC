const Decano = require('../models/decano')

const decanoCtrl = {}

decanoCtrl.getDecanos = (req,res) =>{
    Decano.find()
    .then((decano)=>{
        res.json(decano),
        res.status(200)
        //console.log(decano)
    })
    .catch((err)=>{
        res.json(err)
    })
}


 decanoCtrl.createDecano = async(req,res) =>{
    let decano = new Decano({
    nombramiento:req.body.nombramiento,
    fecha:req.body.fecha,
    nombre:req.body.nombre,
    apellido:req.body.apellido,
    rango:req.body.rango
    })
    await decano.save()
    .then(()=>{
        res.json({status:true})
        res.status(200)
    })
    .catch((err)=>{
        res.json(err)
    })
}


decanoCtrl.editDecano = (req,res) =>{
    let decano =  {
        nombramiento:req.body.nombramiento,
        fecha:req.body.fecha,
        nombre:req.body.nombre,
        apellido:req.body.apellido,
        rango:req.body.rango
        }
        console.log(decano +  'OKKKKKKK')
        Decano.findOneAndUpdate( {_id: req.params.id } , {$set: decano} )
        .then((ok)=>{
            res.json({status:'ok'})
            
        })
        .catch((err)=>{
            res.json(err)
        })
}




module.exports = decanoCtrl