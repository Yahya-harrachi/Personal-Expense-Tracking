import React, { createContext, useState, useEffect } from 'react';
import {app} from '../Firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // Use null initially
  const [ user , setUser ] = useState(null)
  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setIsAuthenticated(true); // Set authenticated to true if currentUser exists
        setUser(currentUser)
        console.log('currentUser authenticated:', currentUser); // Log currentUser for debugging
      } else {
        setIsAuthenticated(false); // Set authenticated to false if no currentUser
        setUser(null);
        console.log('No currentUser is authenticated'); // Log when currentUser is not authenticated
      }
    });

    return () => unsubscribe(); // Clean up the subscription on unmount
  }, [auth]);

  return (
    <AuthContext.Provider value={{ isAuthenticated , user }}>
      {children}
    </AuthContext.Provider>
  );
}
