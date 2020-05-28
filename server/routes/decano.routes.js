const express = require('express');
const router = express.Router()

const decano = require('../controllers/decano.controller');


router.get('/',decano.getDecanos)
router.post('/create',decano.createDecano)
router.put('/:id',decano.editDecano)

module.exports = router