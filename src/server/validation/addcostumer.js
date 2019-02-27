const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateCustomerInput(data) {
  const errors = {};

  data.customerno = !isEmpty(data.customerno) ? data.customerno : '';
  data.tableno = !isEmpty(data.tableno) ? data.tableno : '';

  if (Validator.isEmpty(data.customerno)) {
    errors.customerno = 'Customer number field is required';
  }

  if (Validator.isEmpty(data.tableno)) {
    errors.tableno = 'table Number field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
