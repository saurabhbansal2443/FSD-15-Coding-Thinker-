import React, { createContext, useEffect, useState } from "react";
export const ThemeContext = createContext();
const ThemeProvider = ({ children }) => {
  const defaultTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(defaultTheme ? defaultTheme : "light");
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  const data = { theme, setTheme };
  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
