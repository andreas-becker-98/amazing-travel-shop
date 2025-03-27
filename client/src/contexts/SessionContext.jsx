import React, { createContext, useState, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const SessionContext = createContext();

export function SessionProvider({ children }) {
  const [token, setToken] = useLocalStorage("authToken", "");
  const [user, setUser] = useLocalStorage("user", "");

  const isLoggedIn = () => {
    return token !== "";
  };

  const logout = () => {
    setToken({});
  };

  return (
    <SessionContext.Provider value={{ user, setUser, token, setToken, isLoggedIn, logout }}>
      {children}
    </SessionContext.Provider>
  );
}

export const useSession = () => useContext(SessionContext);
