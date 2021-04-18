function payCalculator(salary) {
  return {
    pay: salary,
    tax: 0,
    NI: 0,
    payPercentage: 100,
    taxPercentage: 0,
    NIPercentage: 0,
  };
}

module.exports = payCalculator;
