const express = require('express')
const router = express.Router();

const materia = require('../controllers/materia.controller');

router.get('/',materia.getMaterias);
router.get('/:id',materia.getMateria);
router.post('/create',materia.createMateria);
router.put('/:id',materia.updateMateria);
router.delete('/:id',materia.deleteMateria);
//router.get('/puta',materia.getMateriasCa)// esta es x si no sirve

module.exports = router