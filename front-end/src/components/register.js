import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';


const Form = () => {
  const [userData, setUserData] = useState({
      name: '',

  })

  const [userDataSet, setUserDataSet] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const { name, email, password} = userData;


  const validUser = Yup.object().shape({
          name: yup
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
          terms: yup.boolean().oneOf([true], 'You must accept the Terms of Service'),
  });

  const submitHandler = e => {
      e.preventDefault();
      console.log(order);
      setOrderPlaced(true);
  }

  useEffect(()=>{
      schema.isValid(order).then(valid => setDisabled(!valid))
  }, [order])

  return (
    /*form goes here*/
    <form className="form-container" onSubmit={formSubmit}>
      <div className="all-center">
        <h2>Please Register!</h2>

        {/* // Text Input // */}
        <label htmlFor="name">
          Name:&nbsp;
          <input
            value={formState.fname}
            onChange={inputChange}
            id="name"
            name='name'
            type='text'
            placeholder='NAME'
          />
        </label>

        <label htmlFor="emailInput">
          Email:&nbsp;
          <input
            value={formState.email}
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
            value={formState.password}
            onChange={inputChange}
            id="passwordInput"
            name='password'
            type='password'
            placeholder='Password'
          />
        </label>

        {/* ERRORS */}
        <div className="alert">
          <div>{errors.fname}</div>
          <div>{errors.lname}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
        </div>

        <div className="form-checkbox">
          <label htmlFor="termsInput">
            <h4> Do you agree to the Terms of Service?</h4> &nbsp;
            <input
              type="checkbox"
              name="terms"
              id="termsInput"
              checked={formState.terms}
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

export default Form;