const User = require('../models/user');
const jwt = require('jsonwebtoken')
const userCtrl = {};


userCtrl.getUsuarios = (req,res)=>{
    //console.log(req)
    User.find()
    .then((usuarios)=>{
        res.json(usuarios)
        //console.log(usuarios)

    })
    .catch((err)=>{
        res.json(err)
    })
}

userCtrl.getUsuario = async(req,res) =>{
console.log(req.params)
  await User.findOne({_id:req.params.id })
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
//console.log(usuario)
await usuario.save()

const token = jwt.sign({_id:usuario._id}, 'secretkey')

res.status(200).json({token})
/* .then(() => {
    res.status(200);

    res.json({
        token
    })
})
.catch((err) => {
    res.json(err)
}) */

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

userCtrl.deleteUsuario = async(req,res) =>{


User.findOneAndDelete({user:req.params.id})
.then((ok)=>{
    res.json(ok)
})
.catch((err)=>{
    res.json(err)
})
}

userCtrl.singin = async (req,res) =>{
    const { user,password } = req.body
    const expireIn = 24 * 60 * 60
   // console.log(req.body)
    const usuario  = await User.findOne({user:user})
    if(!usuario) return res.status(401).send('el usuario no existe')
    if(usuario.password !== password) return res.status(401).send('contraseña erronea')

const token =  jwt.sign({_id:usuario._id},'secretkey',{expiresIn:expireIn})
return     res.status(200).json( {jwt:token})

}





module.exports = userCtrl

function verifyToken(req,res,next){
    if(!req.headers.authorization){
        return res.status(401).send('no hay authorization ')
    }


    const token = req.headers.authorization.split(' ')[1]

    if(token === 'null'){
        return res.status(401).send('Autorizacion request')

    }

   const payload = jwt.verify(token,'secretkey')
    req.userId = payload._id
    console.log(payload)
    next();
}

