const express = require('express')
const router = express.Router();

const carrera = require('../controllers/carrera.controller');

router.get('/', carrera.getCarreras);
router.get('/:id', carrera.getCarrera);
router.post('/create', carrera.createCarrera);
router.put('/:id', carrera.updateCarrera);
router.delete('/:id', carrera.deleteCarrera);

module.exports = router