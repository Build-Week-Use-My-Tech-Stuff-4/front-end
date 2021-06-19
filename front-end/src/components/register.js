import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';

const Register = () => {
  const [userDataState, setUserDataState] = useState({
      user_name: '',
      lname:'',
      email:'',
      password:'',
      terms:'',
      city:'',
      state:'',
      zip:'',
  })

  const [errors, setErrors] = useState({
    user_name: '',
    lname:'',
    email:'',
    password:'',
    terms:'',
    city:'',
    state:'',
    zip:'',
  });

  const [btnDisabled, setBtnDisabled] = useState('');

  const [post, setPost] = useState([])

  const validUser = yup.object().shape({
          user_name: yup
          .string()
          .trim()
          .min(2, "First name must be 2+ characters")
          .required("First name is a required fireld"),
          password: yup
          .string()
          .trim()
          .min(5, "Password must be 5+ characters")
          .max(25, "Password must be 25 or less characters")
          .required("Password is a required fireld"),
          email: yup
          .string()
          .email('Must be a valid email')
          .trim()
          .required("Email is required"),
          city: yup
          .string()
          .trim()
          .required("City is required"),
          state: yup
          .string()
          .trim()
          .required("State is required"),
          zip: yup
          .string()
          .trim()
          .required("Zip is required"),
          terms: yup.boolean().oneOf([true], 'You must accept the Terms of Service'),
  });

useEffect (() =>{
  console.log('form state changed')
  validUser.isValid(userDataState).then((valid) => {
    setBtnDisabled(!valid);
  });
});

const validateChange = e => {
  yup
  .reach(validUser, e.target.name)
  .validate(e.target.value)
  .then(valid => {
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  })
  .catch((err) => {
    setErrors({
      ...errors,
      [e.target.name]: err.errors[0],
    });
  });
};

const inputChange = e => {
  e.persist();

  const newUserData = {
    ...userDataState,
    [e.target.name]:e.target.type==='checkbox' ? e.target.checked : e.target.value,
  };
  validateChange(e);
  setUserDataState(newUserData);
};

const userDataSubmit = (e) => {
  e.preventDefault();
  axios
  .post('', userDataState)
  .then(res => {
    setPost(res.data)
    // setTimeout(() => { console.log("success", post)}, 1000);  

    setUserDataState({
      user_name: '',
      lname:'',
      email:'',
      password:'',
      terms:'',
      city:'',
      state:'',
      zip:'',
    });
  })
  .catch((err) => {
    console.log('error in form submit fn', err.response);
  })
};

useEffect(()=> {
  console.log(post)
}, [post])

  return (
    /*form goes here*/
    <form className="userData-container" onSubmit={userDataSubmit}>
      <div className="all-center">
        <h2>Please Register!</h2>

        {/* // Text Input // */}
        <label htmlFor="user_name">
          UserName:&nbsp;
          <input
            value={userDataState.user_name}
            onChange={inputChange}
            id="user_name"
            name='user_name'
            type='text'
            placeholder='USER_NAME'
          />
        </label>

        <label htmlFor="emailInput">
          Email:&nbsp;
          <input
            value={userDataState.email}
            onChange={inputChange}
            id="email"
            name='email'
            type='text'
            placeholder='youremail@email.com'
          />
        </label>

        <label htmlFor="passwordInput">
          Password:&nbsp;
          <input
            value={userDataState.password}
            onChange={inputChange}
            id="passwordInput"
            name='password'
            type='text'
            placeholder='Password'
          />
        </label>

        <label htmlFor="cityInput">
          City:&nbsp;
          <input
            value={userDataState.password}
            onChange={inputChange}
            id="city"
            name='city'
            type='text'
            placeholder='city'
          />
        </label>

        <label htmlFor="stateInput">
          State:&nbsp;
          <input
            value={userDataState.password}
            onChange={inputChange}
            id="state"
            name='state'
            type='text'
            placeholder='state'
          />
        </label>

        <label htmlFor="zipInput">
          Zip:&nbsp;
          <input
            value={userDataState.password}
            onChange={inputChange}
            id="zip"
            name='zip'
            type='text'
            placeholder='zip'
          />
        </label>

        {/* ERRORS */}
        <div className="alert">
          <div>{errors.user_name}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
          <div>{errors.city}</div>
          <div>{errors.state}</div>
          <div>{errors.zip}</div>

        </div>

        <div className="u-checkbox">
          <label htmlFor="termsInput">
            <h4> Do you agree to the Terms of Service?</h4> &nbsp;
            <input
              type="checkbox"
              name="terms"
              id="termsInput"
              checked={userDataState.terms}
              onChange={inputChange}
              />
          </label>
      </div>

      {/* Submit Button */}
      <div className="submit-btn">
        {/* disable until form is complete */}
        <button className="btn" disabled={btnDisabled} type="submit">
          Submit
        </button>
        </div>
        {/* ends form submit div */}
      </div>
      {/* ends form text div */}
    </form>
  );
};

export default Register;