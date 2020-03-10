const User = require('../models/user');

const userCtrl = {};


userCtrl.getUsuarios = (req,res)=>{
    User.find()
    .then((usuarios)=>{
        res.json(usuarios)
        console.log(usuarios)

    })
    .catch((err)=>{
        res.json(err)
    })
}

userCtrl.getUsuario = async(req,res) =>{
console.log(req.params)
  await User.findOne({user:req.params.id })
    .then((user)=>{
        res.json(user)
        
    })
    .catch((err)=>{
        res.json(err)
        
    })
}

userCtrl.createUser = async(req,res)=>{
const usuario = new User({
    user:req.body.user,
    password:req.body.password,
    question:req.body.question,
    answer:req.body.answer,
    role:req.body.role
})
console.log(usuario)
await usuario.save()
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



userCtrl.updateUsuario = async(req,res) =>{
    let  usuario = {
        user:req.body.user,
        password:req.body.password,
        question:req.body.question,
        answer:req.body.answer,
        role:req.body.role
    } 
     User.findOneAndUpdate({user:req.params.id},{$set:usuario})
     .then((usuario)=>{
         res.json(usuario)
     })
     .catch((err)=>{
         res.json(err)
     })
}

module.exports = userCtrl