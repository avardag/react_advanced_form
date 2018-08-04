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

  const changeHandler =(e, id) =>{ //id is lastname || firstName
    const newState = props.formData; //copy of state
    newState[id].value = e.target.value;

    props.change(newState)
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
                onChange={e => changeHandler(e, item.id)}
                />
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