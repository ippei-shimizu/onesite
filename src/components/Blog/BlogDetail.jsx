import { useRouter } from "next/router";
import { useFetch } from "src/hooks/useFetch";
import { API_URL_M_CMS } from "src/utils/const";
import styles from "src/components/Blog/BlogDetail.module.css";
import Link from "next/link";
import Image from "next/image";
import formatDate from "libs/utils";
import Head from "next/head";
import { renderToc } from "libs/render-toc";
import { TableOfContents } from "./TalbleOfContent";
import classes from "src/styles/Home.module.css";
import {
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
  LineShareButton,
  LineIcon,
} from "react-share";
import { useContext } from "react";
import { DarkModeContext } from "src/hooks/DarkModeContext";
import "highlight.js/styles/base16/harmonic16-dark.css";

const PROFILE_SNS = [
  {
    href: "https://github.com/ippei-shimizu",
    src: "/github-gray.svg",
    alt: "github",
    width: 20,
    height: 20,
  },
  {
    href: "https://codepen.io/ippei-shimizu",
    src: "/codepen-gray.svg",
    alt: "codepen",
    width: 20,
    height: 20,
  },
  {
    href: "https://twitter.com/ippei_111",
    src: "/twitter-gray.svg",
    alt: "twitter",
    width: 20,
    height: 20,
  },
  {
    href: "https://www.instagram.com/ippei_5/",
    src: "/instagram-gray.svg",
    alt: "instagram",
    width: 20,
    height: 20,
  },
];

export const BlogDetail = (props) => {
  const router = useRouter();
  const { data, error, isLoading } = useFetch(
    router.query.id ? `${API_URL_M_CMS}/blogs/${router.query.id}` : null
  );
  const toc = renderToc(data.content);
  const { colorTheme } = useContext(DarkModeContext);

  if (isLoading) {
    return <div>Loading....</div>;
  }
  if (error) {
    return <div>error</div>;
  }
  return (
    <>
      <Head>
        <title>{data.title} - Onesite</title>
        <meta name="description" content={data.description} />
        <meta property="og:url" content={`${API_URL_M_CMS}/blogs/${data.id}`} />
        <meta property="og:title" content={data.title} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={data.eyecatch.url} />
        <meta property="og:image:width" content={data.eyecatch.width} />
        <meta property="og:image:height" content={data.eyecatch.height} />
      </Head>
      <main className={`w-11/12 mx-auto ${styles.main}`}>
        <div>
          <div className="mt-6 text-right pr-6 sticky top-28"></div>
        </div>
        <div>
          <div className="w-11/12 max-w-3xl min-w-48 mx-auto mt-6 bg-white rounded-3xl py-8 px-8 border-2 border-slate-200 xl:min-w-0 xl:max-w-max xl:w-auto lg:min-w-0 lg:w-auto md:p-4 dark:bg-slate-800 dark:border-slate-300">
            <div className="text-center">
              <Image src={data.icon.url} alt="icon" width={90} height={90} />
            </div>
            <div className="text-center">
              <h1
                className={`font-bold tracking-wide mt-2 inline-block text-left ${styles.title} dark:text-slate-200`}
              >
                {data.title}
              </h1>
            </div>
            <nav className="mt-4">
              <ol className="flex justify-center text-sky-600 font-bold tracking-wide dark:text-sky-200">
                <li>
                  <Link href={`/`} prefetch={false}>
                    <a>
                      Home
                      <span className="mx-2 text-stone-900 dark:text-sky-200">
                        /
                      </span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href={`/categories/${data.category.id}`}>
                    <a>{data.category.name}</a>
                  </Link>
                </li>
              </ol>
            </nav>
          </div>
          <div className="w-11/12 max-w-3xl min-w-48 mx-auto bg-white mt-3 py-10 px-10 rounded-3xl border-2 border-slate-200 xl:min-w-0 xl:max-w-max xl:w-auto lg:min-w-0 lg:w-auto md:mt-4 md:p-4 dark:bg-slate-800 dark:border-slate-300">
            <Image
              src={data.eyecatch.url}
              alt={data.alt}
              width={1200}
              height={630}
              className="rounded-3xl"
            />
            <div className="mt-3">
              <div className="flex">
                <div className="flex items-center mb-4 mr-4">
                  {colorTheme == "dark" ? (
                    <Image
                      src="/clock.svg"
                      alt="投稿日時"
                      width={20}
                      height={20}
                    />
                  ) : (
                    <Image
                      src="/clock-white.svg"
                      alt="投稿日時"
                      width={20}
                      height={20}
                    />
                  )}
                  <p className="ml-1 text-base tracking-normal font-medium dark:text-slate-200">
                    <time>{formatDate(data.date)}</time>
                  </p>
                </div>
                <div className="flex items-center mb-4">
                  {colorTheme == "dark" ? (
                    <Image
                      src="/refresh-small.svg"
                      alt="更新日時"
                      width={24}
                      height={24}
                    />
                  ) : (
                    <Image
                      src="/refresh-small-white.svg"
                      alt="更新日時"
                      width={24}
                      height={24}
                    />
                  )}
                  <p className="ml-1 text-base tracking-normal font-medium dark:text-slate-200">
                    <time>{formatDate(data.updatedAt)}</time>
                  </p>
                </div>
              </div>
              <ul className="flex -ml-1 space-x-4">
                {data.subcategory.map((sub) => {
                  return (
                    <li key={sub.id}>
                      <Link href={`/subcategory/${sub.id}`}>
                        <a className="flex items-center">
                          <Image
                            src={sub.icon.url}
                            alt={sub.alt}
                            width={28}
                            height={28}
                          />
                          <p className="font-bold text-base pl-2 dark:text-slate-200">
                            {sub.name}
                          </p>
                        </a>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div
              className={`mt-20 
              prose-h2:text-contentH2 prose-h2:font-bold prose-h2:tracking-wide prose-h2:mt-14 prose-h2:mb-6 prose-h2:border-b-2 prose-h2:border-slate-200 prose-h2:pb-2
              dark:prose-h2:text-slate-200
              prose-h3:text-contentH3 prose-h3:font-bold prose-h3:tracking-wide prose-h3:mt-12 prose-h3:mb-5
              dark:prose-h3:text-slate-200
              prose-h4:text-contentH4 prose-h4:font-semibold prose-h4:tracking-wide prose-h4:mt-6 prose-h4:mb-4
              dark:prose-h4:text-slate-200
              prose-h5:text-contentH4 prose-h5:font-semibold prose-h5:tracking-wide prose-h5:mt-6 prose-h5:mb-4
              dark:prose-h5:text-slate-200
              prose-p:text-base prose-p:tracking-wide prose-p:font-normal prose-p:mt-4 prose-p:mb-7 prose-p:leading-8
              dark:prose-p:text-slate-200
              prose-strong:!text-sky-700 prose-strong:font-bold prose-strong:border-stone-300 prose-strong:px-1 prose-strong:py-0.5
              dark:prose-strong:!text-sky-200
              prose-a:inline-block prose-a:text-sm prose-a:font-bold prose-a:px-12 prose-a:py-4 prose-a:text-white prose-a:text-center prose-a:bg-sky-600 prose-a:rounded-lg prose-a:my-2
              prose-pre:bg-slate-800 prose-pre:overflow-x-scroll prose-pre:rounded-xl prose-pre:mb-10
              dark:prose-pre:bg-slate-900 dark:prose-pre:border dark:prose-pre:border-slate200
              prose-code:text-white prose-code:text-sm prose-code:leading-7 prose-code:rounded-xl
              dark:prose-span:!text-slate-200;
              ${styles.content}`}
              dangerouslySetInnerHTML={{
                __html: props.props,
              }}
            />
          </div>
        </div>
        {/* サイドバー */}
        <div className="mt-6 ml-3 relative lg:hidden">
          <div className="sticky top-6">
            <div className="flex items-center bg-white rounded-3xl py-5 px-6 border-2 border-slate-200 mb-3 dark:bg-slate-800 dark:border-slate-300">
              <Image
                src="/profile.png"
                alt="IppeiShimizu"
                width={52}
                height={52}
              />
              <div>
                <p className="font-bold text-lg ml-3 mb-1 dark:text-slate-200">
                  Ippei
                </p>
                <ul className="flex ml-3 space-x-2">
                  {PROFILE_SNS.map((sns) => {
                    return (
                      <li key={sns.href}>
                        <Link href={sns.href}>
                          <a className={`duration-100 ${classes.hoverOpacity}`}>
                            <Image
                              src={sns.src}
                              alt={sns.alt}
                              width={sns.width}
                              height={sns.height}
                            />
                          </a>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <TableOfContents toc={toc} />
            <div className=" mt-3 ml-3 space-x-3">
              <TwitterShareButton
                url={`https://www.onesite-web.com/blogs/${data.id}`}
                title={data.title}
              >
                <TwitterIcon
                  size={40}
                  round={true}
                  className={`mx-auto duration-100 ${classes.hoverOpacity}`}
                />
              </TwitterShareButton>
              <FacebookShareButton
                url={`https://www.onesite-web.com/blogs/${data.id}`}
                title={data.title}
              >
                <FacebookIcon
                  size={40}
                  round={true}
                  className={`mx-auto duration-100 ${classes.hoverOpacity}`}
                />
              </FacebookShareButton>
              <LineShareButton>
                <LineIcon
                  size={40}
                  round={true}
                  className={`mx-auto duration-100 ${classes.hoverOpacity}`}
                />
              </LineShareButton>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
