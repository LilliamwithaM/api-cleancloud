const express = require('express');

const router = express.Router();

//* CONTROLLERS ⚡⚡
const { createRegistro } = require('../controllers/registroController');

//* VALIDATORS ✅✅
const { registroValidator } = require('../validators/registroValidator');

//* ROUTES ✈️✈️

router.post('/', registroValidator, createRegistro);

module.exports = router;
