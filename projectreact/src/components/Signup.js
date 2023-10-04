import React, { useState } from "react";
import "./Signup.css";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const InputField = ({ label, name, type, value, onChange, error }) => (
  <div className="mb-3">
    <label htmlFor={name} className="form-label">
      {label}
    </label>
    <input
      type={type}
      className={`form-control ${error ? "is-invalid" : ""}`}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
    />
    {error && <div className="invalid-feedback">{error}</div>}
  </div>
);

const Signup = () => {
  const history = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    birthDate: "",
    country: "",
  });

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [errors, setErrors] = useState({});

  const {
    username,
    password,
    confirmPassword,
    firstName,
    lastName,
    birthDate,
    country,
  } = formData;

  const validateForm = () => {
    const errors = {};

    if (!username) {
      errors.username = "Username is required";
    }
    return errors;
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/signup", formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        history("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="backgroundLayer">
        {/* form */}
        <div className="h-75 d-inline-block border border-light p-3 bg-light bg-opacity-50">
          <h1>
            Welcome to, NestFit<i className="bi bi-0-circle"></i>
          </h1>
          <form className="mx-5" onSubmit={handleSignup}>
            <InputField
              label="Username"
              name="username"
              type="text"
              value={username}
              onChange={handleInputChange}
              error={errors.username}
            />
            <InputField
              label="Password"
              name="password"
              type="password"
              value={password}
              onChange={handleInputChange}
              error={errors.password}
            />
            <InputField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={handleInputChange}
              error={errors.confirmPassword}
            />
            <InputField
              label="First Name"
              name="firstName"
              type="text"
              value={firstName}
              onChange={handleInputChange}
              error={errors.firstName}
            />
            <InputField
              label="Last Name"
              name="lastName"
              type="text"
              value={lastName}
              onChange={handleInputChange}
              error={errors.lastName}
            />
            <InputField
              label="Birth Date"
              name="birthDate"
              type="date"
              value={birthDate}
              onChange={handleInputChange}
              error={errors.birthDate}
            />
            <InputField
              label="Country"
              name="country"
              type="text"
              value={country}
              onChange={handleInputChange}
              error={errors.country}
            />

            <button
              type="submit"
              className="btn btn-primary"
              disabled={
                Object.keys(errors).length > 0 || password !== confirmPassword
              }
            >
              Submit
            </button>
          </form>
          <Link to="/login">Login Page</Link>
          {message && (
            <div className={`alert alert-${messageType}`} role="alert">
              {message}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Signup;
