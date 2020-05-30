const express = require('express')
const jwt = require('jsonwebtoken')

const router = express.Router();

const periodo = require('../controllers/periodo.controller');

router.get('/',verifyToken,periodo.getPeriodos);
router.get('/:id',verifyToken,periodo.getPeriodo);
router.post('/create',verifyToken,periodo.createPeriodo);
router.put('/:id',verifyToken,periodo.updatePeriodo);
router.delete('/:id',verifyToken,periodo.deletePeriodo);

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
