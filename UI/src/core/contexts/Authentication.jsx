import { createContext, useState, useEffect } from "react";
import { AUTHINFO } from "./constants";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const login = ({ data }) => {
    if (data.email === AUTHINFO.email && data.password === AUTHINFO.password) {
      const fakeToken = "mocked-jwt-token-1234";
      localStorage.setItem("authToken", fakeToken);
      setToken(fakeToken);
    } else {
      console.log("Invalid credntials!");
    }
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    setToken(null);
    console.log("Logout successfully");
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
