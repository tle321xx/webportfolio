import React from "react";
import { Link } from 'react-router-dom'
import "./Navbar";
import { useAuth } from './AuthContext';

function Navbar() {
  const { loggedIn, logout } = useAuth();
  return (
    <>
      <div className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
        <h3 className="display-6 fw-bold lh-1 mb-3"><span className="text-warning">Nest</span>Fit</h3>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link" to="/signup">
                Sign up
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">
                Profile
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/logout">
                Logout
              </Link>
            </li> */}
            {loggedIn ? (
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={logout}>
                  Logout
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
