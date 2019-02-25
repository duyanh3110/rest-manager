const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateMenuInput(data) {
  const errors = {};

  data.foodname = !isEmpty(data.foodname) ? data.foodname : '';
  data.description = !isEmpty(data.description) ? data.description : '';
  data.price = !isEmpty(data.price) ? data.price : '';
  data.foodtype = !isEmpty(data.foodtype) ? data.foodtype : '';

  if (Validator.isEmpty(data.name)) {
    errors.name = 'Name field is required';
  }

  if (Validator.isEmpty(data.description)) {
    errors.description = 'Description field is required';
  }

  if (Validator.isEmpty(data.price)) {
    errors.price = 'Price field is required';
  }

  if (Validator.isEmpty(data.type)) {
    errors.type = 'Food type field is required';
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
