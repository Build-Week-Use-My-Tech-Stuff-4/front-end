import React, {useState} from 'react'



const initialFormValues = {
    email: "",
    password: ""
  };

export default function Login() {
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
        <div>
            <form className="logInForm">
                <lable>Email:
                    <input 
                    type="text" 
                    id="email"
                    name="email"
                    value={formValues.email}
                    placeholder="Enter email here"/>
                </lable>
                    <br/>
                <lable>Password
                    <input 
                    type="text" 
                    id="password"
                    name="password" 
                    value={formValues.password}
                    placeholder="Enter password here"/>
                </lable>
                    <button onSubmit={formSubmit}>Login</button>
            </form>
        </div>
    )
};   