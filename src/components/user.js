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
        },
        validation: {
          required: true,
          minLen: 3
        },
        valid: false,
        touched: false,
        validationMsg: ''
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
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMsg: ''
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
        },
        validation: {
          required: false
        },
        valid: true,
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
            {val: '3', text: '28-48 '},
            {val: '4', text: '48-68'},
          ]
        },
        validation: {
          required: false
        },
        valid: true,
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
    let formIsValid = true;
    //assign keys to DataTOSubmit from state
    for (const key in this.state.formData) {
      dataToSubmit[key] = this.state.formData[key].value
    }
    for (const key in this.state.formData) {
      if (this.state.formData.hasOwnProperty(key)) {
        formIsValid = this.state.formData[key].valid && formIsValid;
        
      }
    }
    
    if (formIsValid) {
      console.log(dataToSubmit)
      // axios.post(URL, dataToSubmit)
    }
  }
  render() {
    return (
      <div className="container">
        <form onSubmit={this.submitForm}>
          <FormFields 
                formData={this.state.formData} //from state
                onblur={(newState)=> this.updateForm(newState)} //onblur prop
                change={(newState)=> this.updateForm(newState)}
                />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default User;
