const { check } = require('express-validator');
const validatorHandler = require('../handlers/validatorHandler');

const interaccionValidator = [
  check('estado')
    .isBoolean()
    .withMessage(
      'Should be a boolean value',
    ).bail(),
  validatorHandler,

];

module.exports = { interaccionValidator };
