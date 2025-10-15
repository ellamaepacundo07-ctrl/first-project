import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext({
  theme: "light",
  changeTheme: () => {},
});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    function initializeTheme() {
      const storedTheme = localStorage.getItem("theme");
      if (!storedTheme) return;
      setTheme(storedTheme);
    }

    initializeTheme();
  }, [setTheme]);

  function changeTheme(value) {
    setTheme(value)
    localStorage.setItem("theme", value);
  }

  return <ThemeContext value={{ theme, changeTheme }}>{children}</ThemeContext>;
}