import Image from "next/image";
import { useContext } from "react";
import { Link as ScrollLink } from "react-scroll";
import { DarkModeContext } from "src/hooks/DarkModeContext";
import { animateScroll as scroll } from "react-scroll";
import classes from "src/styles/Home.module.css";

export const TableOfContents = ({ toc }) => {
  const { colorTheme } = useContext(DarkModeContext);
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="bg-white pt-6 pb-5 px-8 rounded-3xl border-2 border-slate-200 dark:bg-slate-800 dark:border-slate-300">
      <p className="TableOfContentsHead text-xl font-bold tracking-wide border-b-2 border-slate-700 dark:text-slate-200 dark:border-slate-400">
        Contents
      </p>
      <ul className="mt-5">
        {toc.map((data) => (
          <li key={data.id}>
            <ScrollLink to={data.id} smooth offset={-60} href={data.id}>
              <p
                className={`cursor-pointer text-sm font-bold text-slate-500 mb-3 duration-100 ${classes.hoverOpacity} dark:text-stone-300`}
              >
                {data.text}
              </p>
            </ScrollLink>
          </li>
        ))}
      </ul>
      <div className="flex justify-end">
        {colorTheme === "dark" ? (
          <Image
            src="/page-top.svg"
            alt="ページのトップに戻る"
            width={32}
            height={32}
            onClick={scrollToTop}
          />
        ) : (
          <Image
            src="/page-top-white.svg"
            alt="ページのトップに戻る"
            width={32}
            height={32}
            onClick={scrollToTop}
          />
        )}
      </div>
    </div>
  );
};
