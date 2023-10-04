import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Routes,
  Route,
} from "react-router-dom";

import { useNavigate } from "react-router-dom";

import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";
import Index from "./components/Index";

function App() {
  const navigate = useNavigate();
  const token = localStorage.getItem("accessToken");

  // if(!token) {
  //   return <Signup />
  // }
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/logout" component={LogoutComponent} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
