import Image from "next/image";
import { useContext } from "react";
import { DarkModeContext } from "./DarkModeContext";

export const DarkModeSwitch = () => {
  const { colorTheme, setTheme } = useContext(DarkModeContext);
  const handleClick = () => {
    setTheme(colorTheme);
  };

  return (
    <button
      aria-label="DarkModeToggle"
      type="button"
      className="bg-white w-8 h-8 flex items-center justify-center rounded-md border border-slate-300 cursor-pointer dark:bg-slate-700 dark:border-slate-100"
      onClick={handleClick}
    >
      {colorTheme === "dark" ? (
        <Image
          src="/sun.svg"
          alt="ダークモード切り替えボタン"
          width={18}
          height={18}
        />
      ) : (
        <Image
          src="/dark-white.svg"
          alt="ダークモード切り替えボタン"
          width={18}
          height={18}
        />
      )}
    </button>
  );
};

export default DarkModeSwitch;
