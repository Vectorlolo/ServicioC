const express = require('express')
const router = express.Router();

const constancia = require('../controllers/constancia.controller');
router.get('/',constancia.getConstancias);
router.get('/:id',constanciaCtrl.getConstancia);
router.post('/create',constanciaCtrl.createConstancia);
router.put('/:id',constanciaCtrl.updateConstancia);
router.delete('/:id',constanciaCtrl.deleteConstancia);

module.exports = router