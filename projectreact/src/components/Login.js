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

const Login = () => {
  const history = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [errors, setErrors] = useState({});

  const { username, password } = formData;

  // const validateForm = () => {
  //   const errors = {};

  //   if (!username) {
  //     errors.username = "Username is required";
  //   }
  //   if (!password) {
  //     errors.password = "Password is required";
  //   }
  //   return errors;
  // };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    console.log("formData =",formData);
    axios
      .post("http://localhost:5000/login", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        if (res.data === "exist") {
          history("/home", { state: { id: username } });
        }
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
          <form className="mx-5" onSubmit={handleLogin}>
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

            <button
              type="submit"
              className="btn btn-primary"
              disabled={Object.keys(errors).length > 0}
            >
              Login
            </button>
          </form>
          <p>Haven't user? go to</p>
          <Link to="/signup">Signup Page</Link>
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

export default Login;
