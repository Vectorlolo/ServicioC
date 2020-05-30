const express = require('express')
const router = express.Router();
const jwt = require('jsonwebtoken')

const carrera = require('../controllers/carrera.controller');

router.get('/', verifyToken,carrera.getCarreras);
router.get('/:id',verifyToken, carrera.getCarrera);
router.post('/create',verifyToken, carrera.createCarrera);
router.put('/:id',verifyToken, carrera.updateCarrera);
router.delete('/:id',verifyToken, carrera.deleteCarrera);

module.exports = router



function verifyToken(req,res,next){
    const token = req.headers.authorization.split(' ')[1]
    console.log(token)
    console.log(req.headers.authorization)

    if(!req.headers.authorization){
        return res.status(401).send('no hay authorization ')
    }

   
    
    

    if(token === 'null'){
        return res.status(401).send('Autorizacion request')

    }

   const payload = jwt.verify(token,'secretkey')
    req.userId = payload._id
    console.log(payload)
    next();
}