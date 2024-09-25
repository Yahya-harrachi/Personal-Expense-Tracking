import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export default function PrivateRoute({ children }) {
  const { isAuthenticated } = useContext(AuthContext);

  // Handle loading state
  if (isAuthenticated === null) {
    return <div>Loading...</div>; // or a spinner
  }

  console.log('Attempting to access PrivateRoute. Authenticated:', isAuthenticated); // Debugging line
  return isAuthenticated ? children : <Navigate to="/signin" />;
}
