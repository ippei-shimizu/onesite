import Image from "next/image";
import { useContext } from "react";
import Link from "next/link";
import { marked } from "marked";
import { DarkModeContext } from "src/hooks/DarkModeContext";

export const WorksPostDetail = (props) => {
  const { colorTheme } = useContext(DarkModeContext);
  const FrontMatter = props.props.FrontMatter;
  const Slug = props.props.slug;
  const Content = props.props.content;

  return (
    <>
      <main className="w-11/12 mx-auto max-w-3xl">
        <div className="w-11/12 max-w-3xl min-w-48 mx-auto bg-white mt-6 py-10 px-10 rounded-3xl border-2 border-slate-200 xl:min-w-0 xl:max-w-max xl:w-auto lg:min-w-0 lg:w-auto md:mt-4 md:p-4 dark:bg-slate-800 dark:border-slate-300">
          <Image
            src={FrontMatter.coverImg}
            alt={FrontMatter.alt}
            width={1200}
            height={630}
            className="rounded-3xl !border-2 !border-slate-200 !border-solid"
          />
          <div className="flex items-center justify-end mt-2">
            <a
              href={FrontMatter.url}
              rel="noreferrer"
              target="_blank"
              className="text-sm mr-2 dark:text-white"
            >
              {FrontMatter.url}
            </a>
            {colorTheme === "dark" ? (
              <Image
                src="/newscreen.svg"
                alt="サイトを別タブで開く"
                width={18}
                height={18}
              />
            ) : (
              <Image
                src="/newscreen-white.svg"
                alt="サイトを別タブで開く"
                width={18}
                height={18}
              />
            )}
          </div>
          <div className="text-center mt-6">
            <p className="text-base text-sky-600 dark:text-sky-300">{FrontMatter.category}</p>
            <h2 className="inline-block font-bold text-xl tracking-wider my-2 dark:text-slate-100">
              {FrontMatter.title}
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-100">{FrontMatter.tech}</p>
          </div>
          <ol className="flex justify-center text-sky-500 mt-8">
            <li>
              <Link href={`/`} prefetch={false}>
                <a>
                  Home
                  <span className="mx-2 text-stone-900 dark:text-sky-500">
                    /
                  </span>
                </a>
              </Link>
            </li>
            <li>
              <Link href={`/works`} prefetch={false}>
                <a>Works</a>
              </Link>
            </li>
          </ol>
          <div dangerouslySetInnerHTML={{ __html: marked(Content) }}></div>
        </div>
      </main>
    </>
  );
};

export default WorksPostDetail;
