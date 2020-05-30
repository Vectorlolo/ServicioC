const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')


const usuario = require('../controllers/user.controller')

router.get('/',verifyToken,usuario.getUsuarios)
router.get('/:id',verifyToken,usuario.getUsuario);
router.put('/:id',verifyToken,usuario.updateUsuario);
router.post('/create',verifyToken,usuario.createUser)
router.delete('/:id',verifyToken,usuario.deleteUsuario)
router.post('/singin',usuario.singin);
module.exports = router


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
