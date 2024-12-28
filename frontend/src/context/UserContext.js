import React, { createContext, useState, useContext } from 'react';

// Create a context for the user
const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // User state

  const loginUser = (userData) => {
    setUser(userData); // Set user data when logged in
  };

  const logoutUser = () => {
    setUser(null); // Clear user data when logged out
  };

  return (
    <UserContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the user context
export const useUser = () => {
  return useContext(UserContext);
};
