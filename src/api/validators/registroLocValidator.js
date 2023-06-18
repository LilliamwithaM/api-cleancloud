const { check } = require('express-validator');
const validatorHandler = require('../handlers/validatorHandler');

const registroLocValidator = [
  check('observacion')
    .isString()
    .withMessage(
      'Should be a string value',
    ).bail(),
  check('idRegistro')
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

module.exports = { registroLocValidator };
