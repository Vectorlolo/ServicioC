const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')


const profesor = require('../controllers/profesor.controller')

router.get('/',verifyToken,profesor.getProfesores)
router.get('/:id',verifyToken,profesor.getProfesor);
router.put('/:id',verifyToken,profesor.updateProfesor);
router.post('/create',verifyToken,profesor.createProfesor)
router.delete('/:id',verifyToken,profesor.deleteProfesor)

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