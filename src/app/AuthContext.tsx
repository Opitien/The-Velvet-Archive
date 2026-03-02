import React, { createContext, useContext, useState } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  // Initialize synchronously to avoid flicker/redirect
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    try {
      return localStorage.getItem("velvet_access") === "granted";
    } catch (e) {
      console.warn("LocalStorage access denied:", e);
      return false;
    }
  });

  const login = (password: string) => {
    const validPasswords = ["velvet", "jazz", "speakeasy", "prohibition"];
    if (validPasswords.includes(password.toLowerCase().trim())) {
      try {
        localStorage.setItem("velvet_access", "granted");
      } catch (e) {
        console.warn("LocalStorage write denied:", e);
      }
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    try {
      localStorage.removeItem("velvet_access");
    } catch (e) {
      console.warn("LocalStorage remove denied:", e);
    }
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
