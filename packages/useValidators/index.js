const { useState, createContext } = require('react');

module.exports = function useValidators(validators) {
  const [validationResults, setValidationResults] = useState([]);

  function invokeValidators(value) {
    const results = validators.map(function invokeValidator(validator) {
      return validator(value);
    });

    setValidationResults(results);
  }

  return [createContext(validationResults), invokeValidators];
}
