import React, { Component } from "react";

class Controlled extends Component {
  state = {
    firstName: "",
    lastName: ""
  };

  handleNameChange = e => {
    let name = e.target.name;
    this.setState({ [name]: e.target.value });
  };
  render() {
    return (
      <div className="container">
        <form>
          <div className="form_element">
            <label htmlFor="firstName">Enter First Name</label>
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleNameChange}
            />
          </div>
          <div className="form_element">
            <label htmlFor="lastName">Enter Last Name</label>
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleNameChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Controlled;
