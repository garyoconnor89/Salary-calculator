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
    event.preventDefault();
    this.setState({ hasSubmitted: true });
  };

  render() {
    return (
      <div>
        {this.state.hasSubmitted ? (
          <h1>Here's your salary!</h1>
        ) : (
          <form onSubmit={this.handleSubmit}>
            // <label>Input Salary:</label>
            //{" "}
            <input
              type="text"
              value={this.state.body}
              onChange={this.handleChange}
            />
            // <button>Enter!</button>
            //
          </form>
        )}

        {this.state.hasSubmitted ? (
          <SalaryDisplay salary_value={this.state.salary_value} />
        ) : (
          <h1>false</h1>
        )}
      </div>
    );
  }
}

export default SalaryInput;
