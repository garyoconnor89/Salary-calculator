const payCalculator = require("./utils");

describe("Salary 15,000 or below", () => {
  it("Salaries under 15,000 should return an object with a pay property equal to salary, a tax property equal to 0 and an NI property equal to 0", () => {
    let actual = payCalculator(14000);
    expect(actual.pay).toBe(14000);
    expect(actual.tax).toBe(0);
    expect(actual.NI).toBe(0);

    actual = payCalculator(8699);
    expect(actual.pay).toBe(8699);
    expect(actual.tax).toBe(0);
    expect(actual.NI).toBe(0);
  });
  it("Salaries under 15,000 should return an object with a payPercentage property equal to 100, a taxPercentage property equal to 0 and an NIPercentage property equal to 0", () => {
    let actual = payCalculator(14000);
    expect(actual.payPercentage).toBe(100);
    expect(actual.taxPercentage).toBe(0);
    expect(actual.NIPercentage).toBe(0);

    actual = payCalculator(8699);
    expect(actual.payPercentage).toBe(100);
    expect(actual.taxPercentage).toBe(0);
    expect(actual.NIPercentage).toBe(0);
  });
});

// less than 15,000
// 15,000 - 50,000
// more than 50,000

// check for 3 return values
// check for percentage values
