import React from "react";
import "./Signup.css";
import { useState, useEffect } from "react";


const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [formValid, setFormValid] = useState(false);

  const inputUsername = (event) => {
    setUsername(event.target.value);
  };
  const inputPassword = (event) => {
    setPassword(event.target.value);
  };
  const inputConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };
  const inputFirstName = (event) => {
    setFirstName(event.target.value);
  };
  const inputLastName = (event) => {
    setLastName(event.target.value);
  };
  const inputBirthDate = (event) => {
    setBirthDate(event.target.value);
  };
  const inputGender = (event) => {
    setGender(event.target.value);
  };
  const inputCountry = (event) => {
    setCountry(event.target.value);
  };

  const validateForm = () => {
    // Perform your form validation logic here
    // For example, you can check if all required fields are filled
    // and if the password matches the confirm password
    const isValid = username && password && confirmPassword === password && firstName && lastName && birthDate && gender && country;
    setFormValid(isValid);
    return isValid;
  };

  const handleSignup = (event) => {
    event.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      // Perform signup logic here, for example, make an API request to create a new user
      setMessage("Signup successful!");
      setMessageType("success");
    } else {
      setMessage("Please fill out all fields correctly.");
      setMessageType("danger");
    }
  };

  const handleCancel = () => {
    setUsername("");
    setPassword("");
    setConfirmPassword("");
    setFirstName("");
    setLastName("");
    setBirthDate("");
    setGender("");
    setCountry("");
    setMessage("");
    setMessageType("");
    setFormValid(false);
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
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
              Username
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={inputUsername}
                value={username}
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                onChange={inputPassword}
                value={password}
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Confrim Password
              </label>
              <input
                type="password"
                className="form-control"
                aria-describedby="emailHelp"
                onChange={inputConfirmPassword}
                value={confirmPassword}
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                aria-describedby="emailHelp"
                onChange={inputFirstName}
                value={firstName}
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                aria-describedby="emailHelp"
                onChange={inputLastName}
                value={lastName}
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Birth date
              </label>
              <input
                type="date"
                className="form-control"
                aria-describedby="emailHelp"
                onChange={inputBirthDate}
                value={birthDate}
              />
            </div>
            <label for="exampleInputEmail1" className="form-label">
              Gender
            </label>
            <br />
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value={gender}
                onChange={inputGender}
              />
              <label className="form-check-label" for="inlineRadio1">
                Male
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value={gender}
                onChange={inputGender}
              />
              <label className="form-check-label" for="inlineRadio2">
                Female
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio3"
                value={gender}
                onChange={inputGender}
              />
              <label className="form-check-label" for="inlineRadio3">
                Others
              </label>
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Country
              </label>
              <input
                type="text"
                className="form-control"
                aria-describedby="emailHelp"
                onChange={inputCountry}
                value={country}
              />
            </div>
            <button
              type="cancel"
              className="btn mr-1 border border-dark btn-secondary"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!formValid}
            >
              Submit
            </button>
          </form>
          {/* Display success or error message */}
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
