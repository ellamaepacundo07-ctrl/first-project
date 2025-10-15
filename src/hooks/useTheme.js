import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function useTheme() {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("useTheme must be within ThemeContext");
  }

  return themeContext;
}
