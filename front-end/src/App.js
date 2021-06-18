import React, {useState} from 'react'
import './App.css';
import Login from "./components/Login"

const initialFormValues = {
  email: "",
  password: ""
}

function App() {

  const [formValues, setFormValues] = useState(initialFormValues);

  setFormValues({
    ...formValues,
    [name]: value 
  })
};

const formSubmit = () => {
  const newLogin = {
    email: formValues.email.trim(),
    password: formValues.password.trim(),
  };

  return (
    <div className="App">
      <Login
      values={formValues}
      submit={formSubmit}
      />
    </div>
  );
}

export default App;
