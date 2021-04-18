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
  it("Salaries between 15,000 and 50,000 should return an object with pay, tax and NI properties adjusted by the medium salary tax rates", () => {
    let actual = payCalculator(20000);
    expect(actual.pay).toBe(18400);
    expect(actual.tax).toBe(1000);
    expect(actual.NI).toBe(600);

    actual = payCalculator(49534);
    expect(actual.pay).toBe(38483);
    expect(actual.tax).toBe(6907);
    expect(actual.NI).toBe(4144);
  });
  it("Salaries between 15,000 and 50,000 should return an object with payPercentage, taxPercentage and NIPercentage properties adjusted by the medium salary tax rates", () => {
    let actual = payCalculator(20000);
    expect(actual.payPercentage).toBe(92);
    expect(actual.taxPercentage).toBe(5);
    expect(actual.NIPercentage).toBe(3);

    actual = payCalculator(49534);
    expect(actual.payPercentage).toBe(78);
    expect(actual.taxPercentage).toBe(14);
    expect(actual.NIPercentage).toBe(8);
  });
  it("Salaries above 50,000 should return an object with pay, tax and NI properties adjusted by the medium and top salary tax rates", () => {
    let actual = payCalculator(55000);
    expect(actual.pay).toBe(41700);
    expect(actual.tax).toBe(9000);
    expect(actual.NI).toBe(4300);

    actual = payCalculator(3490762);
    expect(actual.pay).toBe(2034442);
    expect(actual.tax).toBe(1383305);
    expect(actual.NI).toBe(73015);
  });
  it("Salaries above 50,000 should return an object with payPercentage, taxPercentage and NIPercentage properties adjusted by the medium and top salary tax rates", () => {
    let actual = payCalculator(55000);
    expect(actual.payPercentage).toBe(76);
    expect(actual.taxPercentage).toBe(16);
    expect(actual.NIPercentage).toBe(8);

    actual = payCalculator(3490762);
    expect(actual.payPercentage).toBe(58);
    expect(actual.taxPercentage).toBe(40);
    expect(actual.NIPercentage).toBe(2);
  });
});
