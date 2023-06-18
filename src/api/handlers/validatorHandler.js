const { validationResult } = require('express-validator');

const validatorHandler = (req, res, next) => {
  try {
    validationResult(req).throw();
    return next();
  } catch (err) {
    return (res.status(400).send({
      success: false,
      mssg: 'Verify your Form Request Body',
      errors: err.array(),
    }));
  }
};

module.exports = validatorHandler;
