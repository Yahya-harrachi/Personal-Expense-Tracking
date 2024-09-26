import React, { createContext, useState, useEffect } from 'react';
import app from '../Firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // Use null initially
  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true); // Set authenticated to true if user exists
        console.log('User authenticated:', user); // Log user for debugging
      } else {
        setIsAuthenticated(false); // Set authenticated to false if no user
        console.log('No user is authenticated'); // Log when user is not authenticated
      }
    });

    return () => unsubscribe(); // Clean up the subscription on unmount
  }, [auth]);

  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}
