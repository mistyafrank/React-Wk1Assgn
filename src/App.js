import React, { useReducer, useState } from "react";
import "./app.css";


const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value,
  };
};

function App() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [name , setName] = useState('');
  const [password , setPassword] = useState('');

  
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('You have submitted the form.')
  };

  const handleChange =(event) => {
    setName(event.target.value);
    event.preventDefault();
  }
  const handlePasswordChange =(event) => {
    setPassword(event.target.value);
    event.preventDefault();
  }

 
 return (
    <div className="App">
      <h3>Login Form</h3>
      <form onSubmit={ (event) => {handleSubmit (event) } }>
        <fieldset>
        <label >
          Username:
        </label><br/>
        <input type="text" placeholder="Enter Username" value={name} required onChange={(event) => {handleChange(event)}} /><br/>
     
        <label >
          Password:
        </label><br/>
        <input type="password" placeholder="Enter password" value={password} required onChange={(event) => {handlePasswordChange(event)}} /><br/>
          <br />        
          </fieldset>
        <button type="submit">Submit</button>
        <br />
        <span class="psw">
          Forgot <a href="#">password?</a>
        </span>
      </form>
    </div>
  );
}

export default App;
