function payCalculator(salary) {
  let pay = 0;
  let tax = 0;
  let NI = 0;
  let payPercentage = 0;
  let taxPercentage = 0;
  let NIPercentage = 0;

  if (salary < 15000) {
    return {
      pay: salary,
      tax,
      NI,
      payPercentage: 100,
      taxPercentage,
      NIPercentage,
    };
  }

  if (salary < 50000) {
    const midBracket = salary - 15000;
    tax = Math.round((midBracket / 100) * 20);
    NI = Math.round((midBracket / 100) * 12);
  } else {
    const topBracket = salary - 50000;
    const topBracketTax = (topBracket / 100) * 40;
    const topBracketNI = (topBracket / 100) * 2;

    tax = Math.round(topBracketTax + 7000);
    NI = Math.round(topBracketNI + 4200);
  }
  pay = salary - tax - NI;
  payPercentage = Math.round((pay / salary) * 100);
  taxPercentage = Math.round((tax / salary) * 100);
  NIPercentage = Math.round((NI / salary) * 100);

  return { pay, tax, NI, payPercentage, taxPercentage, NIPercentage };
}

module.exports = payCalculator;
