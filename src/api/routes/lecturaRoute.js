const express = require('express');

const router = express.Router();

//* CONTROLLERS ⚡⚡
const { createLectura } = require('../controllers/lecturasController');

//* VALIDATORS ✅✅
const { lecturasValidator } = require('../validators/lecturasValidator');

//* ROUTES ✈️✈️

router.post('/', lecturasValidator, createLectura);

module.exports = router;
