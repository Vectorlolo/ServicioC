const express = require('express')

const router = express.Router();

const periodo = require('../controllers/periodo.controller');

router.get('/',periodo.getPeriodos);
router.get('/:id',periodo.getPeriodo);
router.post('/create',periodo.createPeriodo);
router.put('/:id',periodo.updatePeriodo);
router.delete('/:id',periodo.deletePeriodo);

module.exports = router