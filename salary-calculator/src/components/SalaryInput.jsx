import React, { Component } from "react";
import SalaryDisplay from "./SalaryDisplay";

class SalaryInput extends Component {
  state = {
    salary_value: "",
    hasSubmitted: false,
  };

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ salary_value: value });
  };

  handleSubmit = (event) => {
    // event.preventDefault();
    this.setState({ hasSubmitted: true });
  };

  render() {
    const { hasSubmitted } = this.state;
    return (
      <div>
        {hasSubmitted ? (
          <h1>Here's your salary!</h1>
        ) : (
          <form className="salary-form" onSubmit={this.handleSubmit}>
            <label className="salary-label">Input Salary:</label>

            <input
              className="salary-input"
              type="text"
              placeholder="Enter your salary in GBP"
              value={this.state.body}
              onChange={this.handleChange}
            />
            <button className="salary-button">Enter!</button>
          </form>
        )}

        {hasSubmitted ? (
          <SalaryDisplay salary_value={this.state.salary_value} />
        ) : (
          <p>Please input salary above to see results!</p>
        )}
      </div>
    );
  }
}

export default SalaryInput;
