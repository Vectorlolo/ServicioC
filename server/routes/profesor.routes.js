const express = require('express');
const router = express.Router();

const profesor = require('../controllers/profesor.controller')

router.get('/',profesor.getProfesores)
router.get('/:id',profesor.getProfesor);
router.put('/:id',profesor.updateProfesor);
router.post('/create',profesor.createProfesor)
router.delete('/:id',profesor.deleteProfesor)

module.exports = router
