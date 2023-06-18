const express = require('express');

const router = express.Router();

//* CONTROLLERS ⚡⚡
const { createSensor } = require('../controllers/sensoresController');

//* VALIDATORS ✅✅
const { sensorValidator } = require('../validators/sensorValidator');

//* ROUTES ✈️✈️

router.post('/', sensorValidator, createSensor);

module.exports = router;
