import React, { Component } from "react";

class Uncontrolled extends Component {

  handleSubmitClick = (e) =>{
    e.preventDefault()
    const values = {
      firstName: this.firstName.value,
      lastName: this.lastName.value
    }
    console.log(values)
  }
  render() {
    return (
      <div>
        <div className="container">
          <form>
            <div className="form_element">
              <label htmlFor="firstName">Enter First Name</label>
              <input
                type="text"
                name="firstName"
                ref={input => this.firstName = input}
              />
            </div>
            <div className="form_element">
              <label htmlFor="lastName">Enter Last Name</label>
              <input
                type="text"
                name="lastName"
                ref={input => this.lastName = input}
              />
            </div>
            <button onClick={this.handleSubmitClick}>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Uncontrolled;
