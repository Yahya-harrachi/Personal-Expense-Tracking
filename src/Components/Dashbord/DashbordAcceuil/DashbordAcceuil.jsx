// Accueil.js
import React, { useContext, useState, useEffect } from 'react';
import './dashbordAcceuil.css';
import { AuthContext } from '../../../Auth/AuthContext';
import { doc, getDoc } from 'firebase/firestore';
import { Database } from '../../../Firebase';

const DashbordAcceuil = ({setActiveComponent}) => {
  const { user } = useContext(AuthContext); // Assuming user is fetched from the AuthContext
  const [profileComplete, setProfileComplete] = useState(true);
  
  useEffect( () => {
    const fetchUserData = async () => {
      try {
      const userDoc = doc(Database , "User", user.uid)
      const userDocSnap = await getDoc(userDoc)

    if (userDocSnap.exists()) {
      console.log("Document data:", userDocSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
      
    }
    if (!userDocSnap || !userDocSnap.name || !userDocSnap.email || !userDocSnap.photoURL
      || !userDocSnap.sallary
  ) {
    setProfileComplete(false);
  }
    } catch (error) {
      console.log(error)
    }
    }
    
    if (user && user.uid) {
      console.log("Fetching data for user with ID:", user.uid);
      fetchUserData();
    }
    
    
  }, [user]);

  return (
    <div className="accueil-container">
      <h1>Welcome to your Dashboard</h1>
      {!profileComplete && (
        <div className="profile-warning">
          <p>Your profile is incomplete. Please <a href="#" onClick={() => setActiveComponent('UpdateProfile')}>update your profile</a> to access all features.</p>
        </div>
      )}

      <div className="dashboard-actions">
        <div className="action-card">
          <h2>Manage Expenses</h2>
          <p>Track your daily expenses and manage your budget.</p>
        </div>
        <div className="action-card">
          <h2>View Reports</h2>
          <p>See detailed financial reports of your spending habits.</p>
        </div>
        <div className="action-card">
          <h2>Update Profile</h2>
          <p>Keep your personal information up-to-date.</p>
        </div>
      </div>
    </div>
  );
};

export default DashbordAcceuil;
