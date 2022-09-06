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
import { TwitterShareButton, TwitterIcon } from "react-share";

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

export const BlogDetail = () => {
  const router = useRouter();
  const { data, error, isLoading } = useFetch(
    router.query.id ? `${API_URL_M_CMS}/blogs/${router.query.id}` : null
  );
  const toc = renderToc(data.content);

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
      </Head>
      <main className={`w-11/12 mx-auto ${styles.main}`}>
        <div>
          <div className="mt-10 text-right pr-6 sticky top-28"></div>
        </div>
        <div>
          <div className="w-11/12 max-w-3xl min-w-48 mx-auto mt-10 bg-white rounded-3xl py-8 px-8 border-2 border-slate-200">
            <div className="text-center">
              <Image src={data.icon.url} alt="icon" width={90} height={90} />
            </div>
            <div className="text-center">
              <h1
                className={`font-bold tracking-wide mt-1 inline-block text-left ${styles.title}`}
              >
                {data.title}
              </h1>
            </div>
            <nav className="mt-4">
              <ol className="flex justify-center text-sky-600 font-bold tracking-wide">
                <li>
                  <Link href={`/`} prefetch={false}>
                    <a>
                      Home<span className="mx-2 text-stone-900">/</span>
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
          <div className="w-11/12 max-w-3xl min-w-48 mx-auto bg-white mt-6 py-10 px-10 rounded-3xl border-2 border-slate-200">
            <Image
              src={data.eyecatch.url}
              alt={data.alt}
              width={1200}
              height={630}
              className="rounded-3xl"
            />
            <div className="mt-3">
              <div className="flex items-center mb-4">
                <Image src="/clock.svg" alt="投稿日時" width={20} height={20} />
                <p className="ml-1 text-base tracking-normal font-medium">
                  <time>{formatDate(data.date)}</time>
                </p>
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
                          <p className="font-bold text-base pl-2">{sub.name}</p>
                        </a>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div
              className={`mt-20 ${styles.content}`}
              dangerouslySetInnerHTML={{
                __html: `${data.content}`,
              }}
            />
          </div>
        </div>
        {/* サイドバー */}
        <div className="mt-10 ml-6 relative">
          <div className="sticky top-6">
            <div className="flex items-center bg-white rounded-3xl py-5 px-6 border-2 border-slate-200 mb-6">
              <Image
                src="/profile.png"
                alt="IppeiShimizu"
                width={52}
                height={52}
              />
              <div>
                <p className="font-bold text-lg ml-3 mb-1">Ippei</p>
                <ul className="flex ml-3 space-x-2">
                  {PROFILE_SNS.map((sns) => {
                    return (
                      <li key={sns.href}>
                        <Link href={sns.href}>
                          <a>
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
            <div className=" mt-6 ml-3">
              <TwitterShareButton
                url={`https://www.onesite-web.com/blogs/${data.id}`}
                title={data.title}
              >
                <TwitterIcon size={40} round={true} className="mx-auto" />
                <p className="text-xs mt-1 text-slate-400">ツイート</p>
              </TwitterShareButton>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
