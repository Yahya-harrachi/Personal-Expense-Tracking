import React, { createContext, useState, useEffect } from 'react';
import app from '../Firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // Use null initially
  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(true); // Set true if user exists
      console.log('User:', user); // Log user object for debugging
    });

    return () => unsubscribe(); // Clean up the subscription on unmount
  }, [auth]);

  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}
