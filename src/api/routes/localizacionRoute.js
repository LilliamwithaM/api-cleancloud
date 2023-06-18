const express = require('express');

const router = express.Router();

//* CONTROLLERS ⚡⚡
const { createLocalizacion } = require('../controllers/localizacionController');

//* VALIDATORS ✅✅
const { localizacionValidator } = require('../validators/localizacionValidator');

//* ROUTES ✈️✈️

router.post('/', localizacionValidator, createLocalizacion);

module.exports = router;
