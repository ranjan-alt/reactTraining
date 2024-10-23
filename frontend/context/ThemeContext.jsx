import React, { createContext, useEffect, useState } from "react";
import { toogleThemeApi } from "../utils/themeApi";

// !step 1 create a context
export const ThemeContext = createContext();

// !step 2 create a provider

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    const fetchTheme = async () => {
      const storedTheme = await toogleThemeApi();
      //   console.log(storedTheme.value);
      //   setTheme(storedTheme.value);

      if (storedTheme) {
        // Check the value and set theme accordingly
        setTheme(storedTheme.value === "true" ? "light" : "dark");
      }
    };

    fetchTheme();
  });

  const toggleTheme = () => {
    setTheme((prev) => (prev === "false" ? "dark" : "light"));
    console.log(theme, "theme");
  };
  const styles = {
    light: {
      backgroundColor: "white",
      color: "black",
      transition: "background-color 0.3s ease, color 0.3s ease",
    },
    dark: {
      backgroundColor: "black",
      color: "white",
      transition: "background-color 0.3s ease, color 0.3s ease",
    },
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={styles[theme]}>{children}</div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
