import React, { Component } from "react";
import FormFields from '../widgets/FormFields';


class User extends Component {
  state = {
    formData: { // data to be passed to form templates
      firstName: {
        element: "input",
        value: "",
        label: true,
        labelText: "First Name",
        config: {
          name: "firstname_input",
          type: "text",
          placeholder: "Enter your first name..."
        }
      },
      lastName: {
        element: "input",
        value: "",
        label: true,
        labelText: "Last Name",
        config: {
          name: "lastname_input",
          type: "text",
          placeholder: "Enter you last name..."
        }
      },
      message: {
        element: "textarea",
        value: "",
        label: true,
        labelText: "Message",
        config: {
          name: "lastname_input",
          placeholder: "Enter you message name...",
          rows: 6,
          cols: 36
        }
      },
      age: {
        element: "select",
        value: "",
        label: true,
        labelText: "Age",
        config: {
          name: "lastname_input",
          options: [
            {val: '1', text: '10-18'},
            {val: '2', text: '18-28'},
            {val: '3', text: '28-48'},
            {val: '4', text: '48-68'},
          ]
        }
      },
    }
  };

  updateForm = (newState) =>{
    this.setState({
      formData: newState
    })
  }
  submitForm = (e)=>{
    e.preventDefault();
    let dataToSubmit = {}; //get lastname & forstname from new state
    for (const key in this.state.formData) {
      dataToSubmit[key] = this.state.formData[key].value
    }
    console.log(dataToSubmit)
    // axios.post(URL, dataToSubmit)
  }
  render() {
    return (
      <div className="container">
        <form onSubmit={this.submitForm}>
          <FormFields 
                formData={this.state.formData} //from state
                change={(newState)=> this.updateForm(newState)}
                />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default User;
