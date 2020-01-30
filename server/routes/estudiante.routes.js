const express = require('express');
const router = express.Router();

const estudiante = require('../controllers/estudiante.controller');


router.get('/', estudiante.getEstudiantes);
router.get('/:id', estudiante.getEstudiante);
router.post('/create', estudiante.createEstudiante);
router.put('/:id', estudiante.updateEstudiante);
router.delete('/:id', estudiante.deleteEstudiante);

module.exports = router