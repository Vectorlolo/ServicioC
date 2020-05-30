const express = require('express')
const router = express.Router();
const jwt = require('jsonwebtoken')



const constancia = require('../controllers/constancia.controller');
router.get('/',verifyToken,constancia.getConstancias);
router.get('/:id',verifyToken,constanciaCtrl.getConstancia);
router.post('/create',verifyToken,constanciaCtrl.createConstancia);
router.put('/:id',verifyToken,constanciaCtrl.updateConstancia);
router.delete('/:id',verifyToken,constanciaCtrl.deleteConstancia);

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