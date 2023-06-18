const { check } = require('express-validator');
const validatorHandler = require('../handlers/validatorHandler');

const lecturasValidator = [
  check('calculo')
    .isNumeric()
    .withMessage(
      'Should be a number value',
    ).bail(),
  check('pm25')
    .isNumeric()
    .withMessage(
      'Should be a number value',
    ).bail(),
  check('pm10')
    .isNumeric()
    .withMessage(
      'Should be a number value',
    ).bail(),
  check('ozonoTros')
    .isNumeric()
    .withMessage(
      'Should be a number value',
    ).bail(),
  check('dioxidoNitro')
    .isNumeric()
    .withMessage(
      'Should be a number value',
    ).bail(),
  check('dioxidoAzufre')
    .isNumeric()
    .withMessage(
      'Should be a number value',
    ).bail(),
  check('idSensor')
    .isNumeric()
    .withMessage(
      'Should be a number value',
    ).bail(),
  check('idLocalizacion')
    .isNumeric()
    .withMessage(
      'Should be a number value',
    ).bail(),
  validatorHandler,

];

module.exports = { lecturasValidator };
