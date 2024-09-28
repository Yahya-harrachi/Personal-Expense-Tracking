// Accueil.js
import React, { useContext, useState, useEffect } from 'react';
import './dashbordAcceuil.css';
import { AuthContext } from '../../../Auth/AuthContext';

const DashbordAcceuil = ({setActiveComponent}) => {
  const { user } = useContext(AuthContext); // Assuming user is fetched from the AuthContext
  const [profileComplete, setProfileComplete] = useState(true);

  useEffect(() => {
    console.log("user INFO :" + user.email)
    if (!user || !user.displayName || !user.email || !user.photoURL) {
      setProfileComplete(false);
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
