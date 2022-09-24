import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const [theme, setTheme] = useState(
    typeof window !== "undefined" ? localStorage.theme : "light"
  );
  const colorTheme = theme == "light" ? "dark" : "light";
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [colorTheme, theme]);

  return [colorTheme, setTheme];
};
