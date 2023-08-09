import React, { createContext, useState } from "react";
export const AppContext = /*#__PURE__*/createContext();
export const AppProvider = ({
  children
}) => {
  const [isDark, setIsDark] = useState(false);
  return dom(AppContext.Provider, {
    value: {
      isDark,
      setIsDark
    }
  }, children);
};