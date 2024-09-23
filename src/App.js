import React from "react";
import "./App.css";
import Users from "./Components/Users/Users";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import SignUp from "./Components/Users/Auth/SignUp";
import SignIn from "./Components/Users/Auth/SignIn";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/HomePage/Home";

export default function App() {
  return (
    <Router>
      <div>
      
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/signin" element={<SignIn />} />
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </Router>
  );
}
