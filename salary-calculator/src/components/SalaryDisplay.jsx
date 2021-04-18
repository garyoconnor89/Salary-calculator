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
  };

  componentDidMount = () => {
    const { salary_value } = this.props;
    const salaryBreakdown = payCalculator(salary_value);
    console.log(salaryBreakdown);
    const {
      pay,
      tax,
      NI,
      payPercentage,
      taxPercentage,
      NIPercentage,
    } = salaryBreakdown;
    this.setState({
      salary: salary_value,
      pay,
      tax,
      NI,
      payPercentage,
      taxPercentage,
      NIPercentage,
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
    } = this.state;
    return (
      <div>
        <h2>{`Salary: ${salary}`}</h2>
        <h2>{`Pay: ${pay}`}</h2>
        <h2>{`Tax: ${tax}`}</h2>
        <h2>{`NI: ${NI}`}</h2>
        <h2>{`Pay %: ${payPercentage}`}</h2>
        <h2>{`Tax %: ${taxPercentage}`}</h2>
        <h2>{`NI %: ${NIPercentage}`}</h2>
      </div>
    );
  }
}

export default SalaryDisplay;
