// src/context/AuthContext.js

import React, { createContext, useContext, useState } from 'react';

// 1. Create the context
const AuthContext = createContext();

// 2. Provide the context
export const AuthProvider = ({ children }) => {
  // Simulated logged-in user
  const [user, setUser] = useState({
    username: 'admin_user',
    role: 'Super Admin', // or 'Tenant Admin'
  });

  // Optional: allow toggling role for testing
  const toggleRole = () => {
    setUser(prev => ({
      ...prev,
      role: prev.role === 'Super Admin' ? 'Tenant Admin' : 'Super Admin',
    }));
  };

  return (
    <AuthContext.Provider value={{ user, toggleRole }}>
      {children}
    </AuthContext.Provider>
  );
};

// 3. Custom hook to use the context
export const useAuth = () => useContext(AuthContext);
