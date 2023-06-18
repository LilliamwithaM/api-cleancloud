const { check } = require('express-validator');
const validatorHandler = require('../handlers/validatorHandler');

const sensorValidator = [
  check('numSerie')
    .isNumeric()
    .withMessage(
      'Should be a number value',
    ).bail(),
  check('estado')
    .isString()
    .withMessage(
      'Should be a string value',
    ).bail(),
  validatorHandler,

];

module.exports = { sensorValidator };
