import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  return (
    <AppContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </AppContext.Provider>
  );
};
