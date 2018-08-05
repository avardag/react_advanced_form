import React from 'react';

const FormFields = (props) => {

  const renderFields = ()=>{
    const formArray = [];

    for (let key in props.formData) { //turn props object to an array
      if (props.formData.hasOwnProperty(key)) {
        formArray.push({
          id: key, //firstaname or lastname 
          values: props.formData[key]
        })
        
      }
    }
    return formArray.map((item, i)=>{//map thru newly created Array & render each
      return(//render one input on each itern
        <div key={i} className="form_element">
          {renderFormTemplate(item)} 
        </div>
      )
    })
  }

  const showLabel = (show, labelText) =>{//Show label or not?
    return show ? <label>{labelText}</label> : null;
  }
  //Input change handler
  const changeHandler =(e, id, blurBool) =>{ //id is lastname || firstName
    const newState = props.formData; //copy of state
    newState[id].value = e.target.value;
    // validation
    if (blurBool) {
      let validData = validate(newState[id]) //validate newly changed key in state
      newState[id].valid = validData[0] // validData is an error array
      newState[id].validationMsg = validData[1] // validData is an error array
    }
    newState[id].touched = blurBool;
    
    props.change(newState)
  }
  //Validation function
  const validate = (inputEl) =>{
    let error = [true, ''] // index 0->valid, index 1-> validationMsg

    if (inputEl.validation.minLen) { //check minimum length of chars validtion
      const isValid = inputEl.value.length >= inputEl.validation.minLen; //true||false
      const message = `${ !isValid ? 'Must be grater than ' + inputEl.validation.minLen : '' }`
      error = !isValid ? [isValid, message] : error;
    }
    //check if it is required or not
    if (inputEl.validation.required) {
      const isValid = inputEl.value.trim() !== ''; //equals to true || false
      const message = `${ !isValid ? 'This field is required' : '' }`

      error = !isValid ? [isValid, message] : error;
    }

    return error
  }

  const showValidation = (values)=>{
    let errMsg = null;
    if (values.validation && !values.valid) {
      errMsg = (
        <div className="label_error">{ values.validationMsg }</div>
      )
    }
    return errMsg;
  }

  const renderFormTemplate=(item)=>{ //render form w/ switch statmt on type of input
    let formTemplate = null;
    let values= item.values;
    switch (values.element) {
      case "input": //case input, textarea, checkbox etc...
        formTemplate = (
          <div>
            {showLabel(values.label, values.labelText)}
            <input 
                {...values.config} 
                value={values.value}
                onBlur={e => changeHandler(e, item.id, true)} // boolean is touched key in values parent comp state
                onChange={e => changeHandler(e, item.id, false)}
                />
            {showValidation(values)}
          </div>
        )
        break;
      case "textarea": //case input, textarea, checkbox etc...
        formTemplate = (
          <div>
            {showLabel(values.label, values.labelText)}
            <textarea 
                {...values.config} 
                value={values.value}
                onChange={e => changeHandler(e, item.id)}
            ></textarea>
          </div>
        )
        break;
      case "select": //case input, textarea, checkbox etc...
        formTemplate = (
          <div>
            {showLabel(values.label, values.labelText)}
            <select 
                name={values.config.name}
                value={values.value}
                onChange={e => changeHandler(e, item.id)}
            >
            {values.config.options.map((item, i)=>(
              <option value={item.val} key={i}>
                {item.text}
              </option>
            ))}
            </select>
          </div>
        )
        break;
    
      default:
        formTemplate=null;
    }
    return formTemplate;
  }
  return ( 
    <div>
      {renderFields()}
    </div>
   );
}
 
export default FormFields;