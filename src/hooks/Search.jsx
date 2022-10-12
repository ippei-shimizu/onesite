import Image from "next/image";
import { useContext, useEffect, useRef, useState } from "react";
import { DarkModeContext } from "./DarkModeContext";
import styles from "src/hooks/Search.module.css";

export const Search = () => {
  const { colorTheme } = useContext(DarkModeContext);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const q = event.currentTarget.query.value;
    const data = await fetch("/api/search", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ q }),
    });
    const json = await data.json();
    console.log(json.contents);
  };

  const targetRef = useRef();
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const showSearchInput = isHovered || isFocused;

  useEffect(() => {
    targetRef.current.value = "";
  }, [showSearchInput]);

  return (
    <form
      className={`${
        styles.SearchButton
      } bg-white w-8 h-8 relative flex items-center justify-end pr-1.5 rounded-md border border-slate-300 cursor-pointer dark:bg-slate-700 dark:border-slate-100 ${
        showSearchInput ? "w-44" : "w-8"
      }`}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      onFocus={() => {
        setIsFocused(true);
      }}
      onBlur={() => {
        setIsFocused(false);
      }}
      onSubmit={handleSubmit}
      hover={showSearchInput}
    >
      <input
        type="text"
        name="query"
        ref={targetRef}
        showSearchInput={showSearchInput}
        className={`${
          styles.SearchInput
        } h-full absolute top-0 left-0 w-5/6 pl-2 text-xs rounded-md appearance-none outline-none dark:bg-slate-700 dark:text-white ${
          showSearchInput ? "block" : "hidden"
        }`}
      />
      {colorTheme === "dark" ? (
        showSearchInput ? (
          <button className="flex items-center justify-center appearance-none outline-none">
            <Image
              src="/arrow-small-right.svg"
              alt="検索する"
              width={28}
              height={28}
            />
          </button>
        ) : (
          <Image src="/search.svg" alt="検索する" width={18} height={18} />
        )
      ) : showSearchInput ? (
        <button className="flex items-center justify-center appearance-none outline-none">
          <Image
            src="/arrow-small-right-white.svg"
            alt="検索する"
            width={28}
            height={28}
          />
        </button>
      ) : (
        <Image src="/search-white.svg" alt="検索する" width={18} height={18} />
      )}
    </form>
  );
};

export default Search;
