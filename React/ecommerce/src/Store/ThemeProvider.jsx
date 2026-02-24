import React, { createContext, useState } from "react";
export const ThemeContext = createContext();
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const data = { theme, setTheme };
  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
