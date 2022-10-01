import { createContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

export const DarkModeProvider = (props) => {
  const [theme, setTheme] = useState(
    typeof window !== "undefined" ? localStorage.theme : "dark"
  );
  const colorTheme = theme == "dark" ? "light" : "dark";
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [colorTheme, theme]);
  return (
    <div>
      <DarkModeContext.Provider value={{ colorTheme, setTheme }}>
        {props.children}
      </DarkModeContext.Provider>
    </div>
  );
};

export default DarkModeProvider;
export { DarkModeContext };
