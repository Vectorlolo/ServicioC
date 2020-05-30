const express = require('express')
const router = express.Router();
const jwt = require('jsonwebtoken')


const materia = require('../controllers/materia.controller');

router.get('/',verifyToken,materia.getMaterias);
router.get('/:id',verifyToken,materia.getMateria);
router.post('/create',verifyToken,materia.createMateria);
router.put('/:id',verifyToken,materia.updateMateria);
router.delete('/:id',verifyToken,materia.deleteMateria);
//router.get('/puta',materia.getMateriasCa)// esta es x si no sirve

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