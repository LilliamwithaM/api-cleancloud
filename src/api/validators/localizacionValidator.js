const { check } = require('express-validator');
const validatorHandler = require('../handlers/validatorHandler');

const localizacionValidator = [
  check('latitud')
    .isFloat()
    .withMessage(
      'Should be a float value',
    ).bail(),
  check('longitud')
    .isFloat()
    .withMessage(
      'Should be a float value',
    ).bail(),
  check('descripcion')
    .isString()
    .withMessage(
      'Should be a string value',
    ).bail(),
  validatorHandler,

];

module.exports = { localizacionValidator };
