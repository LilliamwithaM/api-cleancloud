const express = require('express');

const router = express.Router();

//* CONTROLLERS ⚡⚡
const { createInteraccion } = require('../controllers/interaccionesController');

//* VALIDATORS ✅✅
const { interaccionValidator } = require('../validators/interaccionValidator');

//* ROUTES ✈️✈️

router.post('/', interaccionValidator, createInteraccion);

module.exports = router;
