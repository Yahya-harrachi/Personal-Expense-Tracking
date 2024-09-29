import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Auth/AuthContext";
import { doc, getDoc } from "firebase/firestore";
import { Database } from "../../../Firebase";
import './profile.css';
import { FaUser, FaEnvelope, FaDollarSign } from 'react-icons/fa'; // Import icons from react-icons

export default function Profile({ setActiveComponent }) {
  const { user } = useContext(AuthContext);
  const [userData, setUserData] = useState(null);

  
  const fetchUserData = async () => {
    try {
      const userDoc = doc(Database, 'User', user.uid);
      const userDocSnap = await getDoc(userDoc);

      if (userDocSnap.exists()) {
        setUserData(userDocSnap.data());
        console.log('Profile:', userDocSnap.data());
      } else {
        console.log('No such document!');
      }
    } catch (error) {
      console.log("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    if (user) {
      fetchUserData();
    }
  }, [user]);

  return (
    <div className="profile-container">
      <h1>Profile</h1>
      {userData ? (
        <div className="profile-info">
          <p><FaUser /> <strong>Name:</strong> {userData.name}</p>
          <p><FaEnvelope /> <strong>Email:</strong> {userData.email}</p>
          <p><FaDollarSign /> <strong>Salary:</strong> {userData.sallary} $</p>
          {/* Display any other fields */}
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
      <input 
        type="button" 
        value="Update Profile" 
        className="update-button" 
        onClick={() => setActiveComponent("UpdateProfile")} 
      />
    </div>
  );
}
