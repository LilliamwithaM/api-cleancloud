const { check } = require('express-validator');
const validatorHandler = require('../handlers/validatorHandler');

const registroValidator = [
  check('edad')
    .isNumeric()
    .withMessage(
      'Should be a number value',
    ).bail(),
  check('sexo')
    .isString()
    .withMessage(
      'Should be a string value',
    ).bail(),
  check('enfermedadRespiratoria')
    .isString()
    .withMessage(
      'Should be a string value',
    ).bail(),
  validatorHandler,

];

module.exports = { registroValidator };
