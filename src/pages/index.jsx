import { client } from "libs/client";
import Head from "next/head";
import { LatestPost } from "src/components/Home/LatestPost";
import { SubCategoryItem } from "src/components/SubCategory/SubCategoryItem";
import { API_URL_M_CMS } from "src/utils/const";
import { SWRConfig } from "swr";

export const getStaticProps = async () => {
  const blogData = await client.get({
    endpoint: "blogs",
    queries: { limit: 5 },
  });
  const subCategoryData = await client.get({ endpoint: "subcategory" });
  const CategoryData = await client.get({ endpoint: "categories" });
  const API_BLOG = `${API_URL_M_CMS}/blogs`;
  return {
    props: {
      fallback: {
        [API_BLOG]: blogData,
      },
      categories: CategoryData,
      subCategory: subCategoryData.contents,
    },
    revalidate: 10,
  };
};

const Home = (props) => {
  const { fallback } = props;
  return (
    <>
      <Head>
        <title>Onesite - フロントエンドの技術アウトプットブログ</title>
        <meta name="description" content="Generated by create next app" />
        <meta property="og:url" content={`${API_URL_M_CMS}`} />
        <meta
          property="og:title"
          content="Onesite - フロントエンドの技術アウトプットブログ"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="../onesite-ogp.jpg" />
      </Head>
      <main>
        <SWRConfig value={{ fallback }}>
          <LatestPost />
          <SubCategoryItem props={props.subCategory} />
        </SWRConfig>
      </main>
    </>
  );
};

export default Home;
