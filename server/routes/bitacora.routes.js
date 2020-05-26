const express = require('express')
const router = express.Router();

const bitacora = require('../controllers/bitacora.controller');
router.get('/',bitacora.getBitacoras);
router.post('/create',bitacora.createBitacora)

module.exports = router