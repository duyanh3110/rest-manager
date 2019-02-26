const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateOrder(data) {
  const errors = {};

  data.foodorder = !isEmpty(data.foodorder) ? data.foodorder : '';
  data.price = !isEmpty(data.price) ? data.price : '';
  data.status = !isEmpty(data.status) ? data.status : '';

  if (Validator.isEmpty(data.foodorder)) {
    errors.name = 'Food order field is required';
  }

  if (Validator.isEmpty(data.price)) {
    errors.description = 'Price field is required';
  }

  if (Validator.isEmpty(data.status)) {
    errors.price = 'Order status field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
