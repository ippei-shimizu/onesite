import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { DarkModeContext } from "src/hooks/DarkModeContext";
import DarkModeSwitch from "src/hooks/DarkModeSwitch";
import Search from "src/hooks/Search";
import styles from "src/styles/Home.module.css";

const NAV_ITEMS = [
  {
    href: "/categories/front-end",
    label: "Frontend",
    src: "/frontend.svg",
    src: "/frontend.svg",
    alt: "Front End",
    class:
      "bg-gradient-to-tl from-nav01-blue-t via-nav01-blue-v to-nav01-blue-b dark:from-nav01-blue-t-dark dark:via-nav01-blue-v-dark dark:to-nav01-blue-b-dark",
  },
  {
    href: "/categories/backend",
    label: "Backend",
    src: "/design.svg",
    alt: "BackEnd",
    class:
      "bg-gradient-to-tl from-nav03-blue-t via-nav03-blue-v to-nav03-blue-b dark:from-nav03-blue-t-dark dark:via-nav03-blue-v-dark dark:to-nav03-blue-b-dark",
  },
  {
    href: "/categories/ios",
    label: "iOS",
    src: "/lifestyle.svg",
    alt: "iOS",
    class:
      "bg-gradient-to-tl from-nav04-blue-t via-nav04-blue-v to-nav04-blue-b dark:from-nav04-blue-t-dark dark:via-nav04-blue-v-dark dark:to-nav04-blue-b-dark",
  },
  {
    href: "/categories/web-production",
    label: "WebProduction",
    src: "/webproduction.svg",
    alt: "Web Production",
    class:
      "bg-gradient-to-tl from-nav02-blue-t via-nav02-blue-v to-nav02-blue-b dark:from-nav02-blue-t-dark dark:via-nav02-blue-v-dark dark:to-nav02-blue-b-dark",
  },
];

export const Header = () => {
  const { colorTheme } = useContext(DarkModeContext);
  const router = useRouter();

  return (
    <header className="w-full mt-12 md:mt-5">
      <div className="w-11/12 max-w-3xl mx-auto">
        <div className="flex justify-between items-center">
          <Link href="/" prefetch={false}>
            <a>
              <h1 className="md:w-42">
                {colorTheme === "dark" ? (
                  <Image
                    src="/logo.svg"
                    alt="Onesite Logo"
                    width={148}
                    height={36}
                  />
                ) : (
                  <Image
                    src="/logo-white.svg"
                    alt="Onesite Logo"
                    width={148}
                    height={36}
                  />
                )}
                <span className="block tracking-wider pl-1.5 text-sm leading-tight md:text-xs">
                  Frontend Engineer Tech Blog
                </span>
              </h1>
            </a>
          </Link>
          <div className="flex space-x-6 items-center">
            <div className="flex space-x-3 items-center">
              <DarkModeSwitch />
            </div>
          </div>
        </div>
        <div className="flex items-center mt-6 md:mt-4">
          <div className="flex md:w-16">
            <Image
              src="/profile.png"
              alt="IppeiShimizu"
              width={68}
              height={68}
            />
          </div>
          <div className="ml-4">
            <p className="text-lg font-bold leading-6 tracking-wide md:text-base dark:text-slate-100">
              Ippei Shimizu
            </p>
            <p className="text-sm font-medium text-zinc-500 md:text-xs dark:text-slate-300">
              Web Coder / Tokyo
            </p>
            <div className="flex mt-1">
              <Link href="/">
                <a>
                  <p className="leading-4 mr-4 font-bold text-sky-700 dark:text-sky-300 hover:opacity-70 hover:duration-150">
                    Home
                  </p>
                </a>
              </Link>
              <Link href="/profile">
                <a>
                  <p className="leading-4 mr-4 font-bold text-sky-700 dark:text-sky-300 hover:opacity-70 hover:duration-150">
                    Profile
                  </p>
                </a>
              </Link>
              {/* <button
                className="cursor-pointer"
                onClick={() => router.push("/works")}
              >
                <p className="leading-4 font-bold text-sky-700 dark:text-sky-300 hover:opacity-70 hover:duration-150">
                  Works
                </p>
              </button> */}
              <Link href="/diary">
                <a>
                  <p className="leading-4 font-bold text-sky-700 dark:text-sky-300 hover:opacity-70 hover:duration-150">
                    Diary
                  </p>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <nav className="mt-16 md:mt-10">
          <ul className="grid grid-cols-4 gap-3 md:grid-cols-2 md:gap-2">
            {NAV_ITEMS.map((item) => {
              return (
                <li
                  key={item.href}
                  className={`${item.class} rounded-3xl dark:hover:opacity-90 dark:hover:duration-200`}
                >
                  <Link href={item.href} prefetch={false}>
                    <a
                      className={`text-center block pt-8 pb-7 px-2 md:pt-3 md:pb-3 rounded-3xl transition duration-100 ${styles.hoverShadow}`}
                    >
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={80}
                        height={80}
                        className="md:!w-14 md:!h-14 md:!min-w-0 md:!min-h-0"
                      />
                      <h2 className="text-lg tracking-wide font-bold mt-2 md:text-base md:-mt-3 dark:text-slate-200">
                        {item.label}
                      </h2>
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};
