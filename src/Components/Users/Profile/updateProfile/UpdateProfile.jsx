import React, { useState } from "react";
import "./updateProfile.css";

const UpdateProfile = () => {

  
  return (
    <div className="profile-container">
      <h2>Update Profile</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" placeholder="Enter your name" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Enter your email" />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter a new password"
          />
        </div>

        <div className="form-group">
          <label htmlFor="monthlySalary">Monthly Salary:</label>
          <input
            type="number"
            id="monthlySalary"
            placeholder="Enter your monthly salary"
          />
        </div>

        <div className="form-group">
          <label htmlFor="profilePicture">Profile Picture:</label>
          <input type="file" id="profilePicture" />
        </div>

        <button type="submit" className="submit-btn">
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
