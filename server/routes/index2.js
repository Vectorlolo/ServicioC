const { Router } =  require('express')
const router = Router()
const jwt = require('jsonwebtoken')


router.get('/datos', verifyToken,(req,res) => res.json([
    {dato1:1},
    {dato2:2},
    {dato3:3},
]))

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