import Image from "next/image";
import { useContext } from "react";
import Link from "next/link";
import { marked } from "marked";
import { DarkModeContext } from "src/hooks/DarkModeContext";

export const WorksPostDetail = (props) => {
  const { colorTheme } = useContext(DarkModeContext);
  const FrontMatter = props.props.FrontMatter;
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
            className="rounded-2xl !border-2 !border-slate-200 !border-solid"
          />
          <div className="flex items-center justify-end mt-2">
            <a
              href={FrontMatter.url}
              rel="noreferrer"
              target="_blank"
              className="text-sm flex items-center  dark:text-white"
            >
              <p className="mr-2">{FrontMatter.url}</p>
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
            </a>
          </div>
          <div className="text-center mt-6">
            <p className="text-base text-sky-600 dark:text-sky-300">
              {FrontMatter.category}
            </p>
            <h2 className="inline-block font-bold text-2xl tracking-wider my-2 dark:text-slate-100">
              {FrontMatter.title}
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-100">
              {FrontMatter.tech}
            </p>
          </div>
          <ol className="flex justify-center text-sky-500 mt-6 mb-10">
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
          <div
            className="prose-h2:font-bold prose-h2:text-xl prose-h2:tracking-widest prose-h2:leading-6 prose-h2:flex prose-h2:items-end prose-h3:text-lg prose-h3:font-bold prose-h3:tracking-wider prose-h3:mb-4 prose-img:mr-1 prose-hr:h-0.5 prose-hr:bg-slate-200 prose-h2:mt-12 prose-hr:mt-1 prose-hr:mb-7 prose-li:leading-7 prose-li:list-disc prose-li:my-1 prose-li:tracking-wide prose-ul:ml-4 prose-p:tracking-wide prose-p:leading-7 prose-p:mb-6 prose-p:mt-1 prose-h4:text-base prose-h4:font-bold prose-h4:tracking-wide prose-h4:mt-8 prose-h4:mb-2 prose-code:bg-slate-100 prose-code:text-slate-600  prose-h2:dark:text-slate-200 prose-code:p-1 prose-code:text-sm prose-code:rounded-sm prose-li:dark:text-slate-200 prose-p:dark:text-slate-200 prose-h3:dark:text-slate-200"
            dangerouslySetInnerHTML={{ __html: marked(Content) }}
          ></div>
        </div>
      </main>
    </>
  );
};

export default WorksPostDetail;
