function payCalculator(salary) {
  if (salary < 15000) {
    return {
      pay: salary,
      tax: 0,
      NI: 0,
      payPercentage: 100,
      taxPercentage: 0,
      NIPercentage: 0,
    };
  }

  const midBracket = salary - 15000;
  const tax = Math.round((midBracket / 100) * 20);
  const NI = Math.round((midBracket / 100) * 12);
  const pay = salary - tax - NI;

  const payPercentage = Math.round((pay / salary) * 100);
  const taxPercentage = Math.round((tax / salary) * 100);
  const NIPercentage = Math.round((NI / salary) * 100);

  return {
    pay,
    tax,
    NI,
    payPercentage,
    taxPercentage,
    NIPercentage,
  };
}

module.exports = payCalculator;
