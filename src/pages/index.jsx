import { client } from "libs/client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { HomeFv } from "src/components/Home/HomeFv";
import { LatestPost } from "src/components/Home/LatestPost";
import { SubCategoryItem } from "src/components/SubCategory/SubCategoryItem";
import { API_URL_M_CMS, PostListLimit } from "src/utils/const";
import { SWRConfig } from "swr";

export const getStaticProps = async () => {
  const blogData = await client.get({
    endpoint: "blogs",
    queries: { limit: PostListLimit },
  });
  const subCategoryData = await client.get({ endpoint: "subcategory" });
  const API_BLOG = `${API_URL_M_CMS}/blogs`;
  return {
    props: {
      fallback: {
        [API_BLOG]: blogData,
      },
      subCategory: subCategoryData.contents,
    },
    revalidate: 10,
  };
};

const SNS_LIST = [
  {
    href: "https://github.com/ippei-shimizu",
    src: "/github.svg",
    alt: "github",
    width: 24,
    height: 24,
  },
  {
    href: "https://codepen.io/ippei-shimizu",
    src: "/codepen.svg",
    alt: "codepen",
    width: 24,
    height: 24,
  },
  {
    href: "https://twitter.com/ippei_111",
    src: "/twitter.svg",
    alt: "twitter",
    width: 24,
    height: 24,
  },
  {
    href: "https://www.instagram.com/ippei_5/",
    src: "/instagram.svg",
    alt: "instagram",
    width: 24,
    height: 24,
  },
];

const Home = (props) => {
  const { fallback } = props;
  return (
    <>
      <Head>
        <title>Onesite - フロントエンドの技術アウトプットブログ</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main>
        <HomeFv />
        <SWRConfig value={{ fallback }}>
          <SubCategoryItem props={props.subCategory} />
          <LatestPost />
        </SWRConfig>
      </main>

      <footer>
        <div>
          <div>
            <div>
              <h4>Profile</h4>
              <div>
                <Image
                  src="/profile.png"
                  alt="清水一平"
                  width={83}
                  height={83}
                />
                <div>
                  <h5>Ippei Shimizu</h5>
                  <p>Yamanashi / web coder</p>
                  <ul>
                    {SNS_LIST.map((sns) => {
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
            </div>
            <p>
              テキスト□テキスト□テキスト□テキスト□テキスト□テキスト□テキスト□テキスト□テキスト□テキスト□テキスト□テキスト□テキスト□
              テキスト□テキスト□テキスト□テキスト□テキスト□テキスト□テキスト□テキスト□テキスト□テキスト□テキスト□テキスト□テキスト□
              テキスト□テキスト□テキスト□テキスト□テキスト□テキスト□テキスト□テキスト□テキスト□テキスト□テキスト□テキスト□テキスト□
              テキスト□テキスト□テキスト□テキスト□テキスト□
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
