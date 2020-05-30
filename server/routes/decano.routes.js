const express = require('express');
const router = express.Router()

const jwt = require('jsonwebtoken')


const decano = require('../controllers/decano.controller');


router.get('/',verifyToken,decano.getDecanos)
router.post('/create',verifyToken,decano.createDecano)
router.put('/:id',verifyToken,decano.editDecano)

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