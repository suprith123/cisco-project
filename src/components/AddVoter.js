import { useState } from "react";
import { UserContext } from '../index';
import React from "react";

function AddVoter(props) {
  const value = React.useContext(UserContext);
  const initialValues = { name: "", age: "", gender: "" };
  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;
    const newFormData = { ...formValues };
    newFormData[fieldName] = fieldValue;
    setFormValues(newFormData);
  };

  const submitHandle=(e)=>{
    e.preventDefault();
    if (formValues.name.length === 0 || formValues.age.length===0 || formValues.gender.length === 0) {
        alert("All fields must be filled!!!");
    }else if(formValues.age<18){
        alert("Below age of 18 is not eligible to vote!!!");
    }else{ 
      value.n1();
      setTimeout(() => {
        props.updateProduct(formValues);
        value.n2();
    },4000)
       
    }
    
  }
  

  return (
    <div>
      <h1>Add Voters</h1>
      <div className="container">
      
      <form onSubmit={submitHandle}>
        <label>
          Enter name:
          <input
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Enter Age:
          <input
            type="number"
            name="age"
            value={formValues.age}
            onChange={handleChange}
          />
        </label><br />
        <label>
          Enter Gender: Male
          <input
            type="radio"
            name="gender"
            value="Male"
            onChange={handleChange}
          />
          Female
          <input
            type="radio"
            name="gender"
            value="Female"
            onChange={handleChange}
          />
        </label><br />
        <input type="submit" />
      </form>
      <div id="t1" >
            </div>
    </div>
    </div>
  );
}

export default AddVoter