import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log(toggleTheme, "togglethem");
  return (
    <>
      <h1>Theme Toggle</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </>
  );
};

export default ThemeToggle;
