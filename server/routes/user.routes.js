const express = require('express');
const router = express.Router();

const usuario = require('../controllers/user.controller')

router.get('/',usuario.getUsuarios)
router.get('/:id',usuario.getUsuario);
router.put('/:id',usuario.updateUsuario);
router.post('/create',usuario.createUser)
module.exports = router