import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext({
  isAuthentificated: false,
  login: () => {},
});

export default function AuthProvider({ children }: any) {
  const [isAuthentificated, setIsAuthentificated] = useState(false);
  function login() {
    setIsAuthentificated(true);
  }
  return (
    <AuthContext.Provider value={{ isAuthentificated, login }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
