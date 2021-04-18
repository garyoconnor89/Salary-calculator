import React, { Component } from "react";

class SalaryDisplay extends Component {
  state = {
    salary: 55000,
    pay: 41700,
    tax: 9000,
    NI: 4300,
    payPercentage: 76,
    taxPercentage: 16,
    NIPercentage: 8,
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
