const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateLocationInput(data) {
  const errors = {};

  data.name = !isEmpty(data.name) ? data.name : '';
  data.location = !isEmpty(data.location) ? data.location : '';

  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = 'Name must be between 2 and 30 characters';
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = 'Name field is required';
  }

  if (Validator.isEmpty(data.location)) {
    errors.location = 'location field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
