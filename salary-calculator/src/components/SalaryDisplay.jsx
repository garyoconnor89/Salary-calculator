import React, { Component } from "react";
import payCalculator from "../utils";

class SalaryDisplay extends Component {
  state = {
    salary: 0,
    pay: 0,
    tax: 0,
    NI: 0,
    payPercentage: 0,
    taxPercentage: 0,
    NIPercentage: 0,
    increaseOne: 0,
    increaseFive: 0,
    increaseTen: 0,
  };

  componentDidMount = () => {
    const { salary_value } = this.props;
    const salaryBreakdown = payCalculator(salary_value);

    const payRiseOne = payCalculator(Number(salary_value) + 1000);
    const payRiseFive = payCalculator(Number(salary_value) + 5000);
    const payRiseTen = payCalculator(Number(salary_value) + 10000);

    console.log(payRiseOne);

    const {
      pay,
      tax,
      NI,
      payPercentage,
      taxPercentage,
      NIPercentage,
    } = salaryBreakdown;

    const increaseOne = payRiseOne.pay;
    const increaseFive = payRiseFive.pay;
    const increaseTen = payRiseTen.pay;

    this.setState({
      salary: salary_value,
      pay,
      tax,
      NI,
      payPercentage,
      taxPercentage,
      NIPercentage,
      increaseOne,
      increaseFive,
      increaseTen,
    });
  };

  render() {
    const {
      salary,
      pay,
      tax,
      NI,
      payPercentage,
      taxPercentage,
      NIPercentage,
      increaseOne,
      increaseFive,
      increaseTen,
    } = this.state;
    return (
      <main>
        <h3 className="salary-display">{`Salary: £${salary}`}</h3>
        <section className="salary-display-container">
          <h4>{`Pay: £${pay}`}</h4>
          <h4>{`Tax: £${tax}`}</h4>
          <h4>{`NI: £${NI}`}</h4>
          <h4>{`Pay Percentage: ${payPercentage}%`}</h4>
          <h4>{`Tax Percentage: ${taxPercentage}%`}</h4>
          <h4>{`NI Percentage: ${NIPercentage}%`}</h4>
          <h6>{`With a £1000 payrise you'd take home £${increaseOne}`}</h6>
          <h6>{`With a £5000 payrise you'd take home £${increaseFive}`}</h6>
          <h6>{`With a £10000 payrise you'd take home £${increaseTen}`}</h6>
        </section>
      </main>
    );
  }
}

export default SalaryDisplay;
