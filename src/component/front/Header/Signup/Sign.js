import React, { useState } from 'react';
import './signup.css';

const useFormValidation = (initialState, validate) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formErrors = validate(values);
    setErrors(formErrors);
    if (Object.keys(formErrors).length === 0) {
      setIsSubmitting(true);
      setIsSubmitted(true);
      console.log('Form Data:', values);
      setTimeout(() => {
        setValues(initialState);
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return {
    values,
    errors,
    isSubmitting,
    isSubmitted,
    handleChange,
    handleSubmit
  };
};

const validateForm = (values) => {
  let errors = {};

  if (!values.name.trim()) {
    errors.name = 'Name is required';
  }

  if (!values.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email.trim())) {
    errors.email = 'Email is invalid';
  }

  if (!values.password.trim()) {
    errors.password = 'Password is required';
  } else if (values.password.trim().length < 6) {
    errors.password = 'Password must be at least 6 characters long';
  }

  return errors;
};

const SignUpForm = () => {
  const initialState = {
    name: '',
    email: '',
    password: ''
  };

  const {
    values,
    errors,
    isSubmitting,
    isSubmitted,
    handleChange,
    handleSubmit
  } = useFormValidation(initialState, validateForm);

  return (
    <div className="container">
      <div className="signup-card">
        <h2>Sign Up</h2>
        {isSubmitted ? (
          <p>Form Submitted! Thank you.</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={values.name}
                onChange={handleChange}
              />
              {errors.name && <p className="error">{errors.name}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={values.password}
                onChange={handleChange}
              />
              {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <button type="submit" className="submit-button" disabled={isSubmitting}>
              Sign Up
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignUpForm;