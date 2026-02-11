// import
import { useContext, createContext, useState } from "react";

// initialize context

const ThemeContext = createContext();

//hook
// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => useContext(ThemeContext);

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const providerObject = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={providerObject}>
      {children}
    </ThemeContext.Provider>
  );
}
