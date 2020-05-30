const express = require('express')
const router = express.Router();
const jwt = require('jsonwebtoken')


const bitacora = require('../controllers/bitacora.controller');
router.get('/',verifyToken,bitacora.getBitacoras);
router.post('/create',verifyToken,bitacora.createBitacora)

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