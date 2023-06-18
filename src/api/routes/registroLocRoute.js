const express = require('express');

const router = express.Router();

//* CONTROLLERS ⚡⚡
const { createRegistroLoc } = require('../controllers/registroLocController');

//* VALIDATORS ✅✅
const { registroLocValidator } = require('../validators/registroLocValidator');

//* ROUTES ✈️✈️

router.post('/', registroLocValidator, createRegistroLoc);

module.exports = router;
