const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateTableInput(data) {
  const errors = {};

  data.tableno = !isEmpty(data.tableno) ? data.tableno : '';

  if (Validator.isEmpty(data.tableno)) {
    errors.tableno = 'Table number field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
