import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { DarkModeContext } from "src/hooks/DarkModeContext";
import classes from "src/styles/Home.module.css";

const SNS_LIST = [
  {
    href: "https://github.com/ippei-shimizu",
    src: "/github.svg",
    alt: "github",
    width: 28,
    height: 28,
    id: "@ippei-shimizu",
    class: "bg-gradient-to-tl from-git-icon-t to-git-icon-b",
  },
  {
    href: "https://codepen.io/ippei-shimizu",
    src: "/codepen.svg",
    alt: "codepen",
    width: 28,
    height: 28,
    id: "@ippei-shimizu",
    class: "bg-gradient-to-tl from-code-icon-t to-code-icon-b",
  },
  {
    href: "https://twitter.com/ippei_111",
    src: "/twitter.svg",
    alt: "twitter",
    width: 28,
    height: 28,
    id: "@ippei_111",
    class:
      "bg-gradient-to-tl from-twitter-icon-t to-twitter-icon-b dark:from-twitter-icon-t-dark dark:to-twitter-icon-b-dark",
  },
  {
    href: "https://www.instagram.com/ippei_5/",
    src: "/instagram.svg",
    alt: "instagram",
    width: 28,
    height: 28,
    id: "@ippei_5",
    class:
      "bg-gradient-to-tl from-instagram-icon-t to-instagram-icon-b dark:from-instagram-icon-t-dark dark:to-instagram-icon-b-dark",
  },
];

const PAGE_LIST = [
  { href: "/contact", id: "Contact" },
  { href: "/privacy-policy", id: "Privacy Policy" },
];

export const Footer = () => {
  const { colorTheme } = useContext(DarkModeContext);

  return (
    <>
      <footer className="mt-6">
        <div className="w-11/12 max-w-3xl mx-auto">
          <div className="mb-32">
            <ul className="grid grid-cols-4 gap-3 md:grid-cols-2 md:gap-2">
              {SNS_LIST.map((sns) => {
                return (
                  <li
                    key={sns.href}
                    className={`rounded-3xl text-center py-10 ${sns.class} transition duration-100 ${classes.hoverShadow} dark:hover:opacity-90 dark:hover:duration-200`}
                  >
                    <Link href={sns.href}>
                      <a className="block">
                        <Image
                          src={sns.src}
                          alt={sns.alt}
                          width={64}
                          height={64}
                          className="block mx-auto"
                        />
                        <p className="text-white font-bold text-base mt-1">
                          {sns.id}
                        </p>
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="text-center">
            <Link href="/">
              <a>
                {colorTheme === "dark" ? (
                  <Image
                    src="/logo.svg"
                    alt="Onesite Logo"
                    width={124}
                    height={32}
                  />
                ) : (
                  <Image
                    src="/logo-white.svg"
                    alt="Onesite Logo"
                    width={124}
                    height={32}
                  />
                )}
              </a>
            </Link>
            <p className="text-xs mb-3 font-normal dark:text-slate-300">
              &copy; 2022 Ippei Shimizu
            </p>
            <p className="text-xs mb-1 font-normal text-gray-500 dark:text-gray-300">
              Site designed by Auforia. App icon by
              <Link href="https://icons8.com/">
                <a target="_blank" className="pl-1">
                  icons8
                </a>
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
