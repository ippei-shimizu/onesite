import { client } from "libs/client";
import Head from "next/head";
import { SubCategoryListItem } from "src/components/SubCategory/SubCategoryListItem";
import { API_URL_M_CMS } from "src/utils/const";
import { SWRConfig } from "swr";

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "subcategory" });
  const paths = data.contents.map((content) => `/subcategory/${content.id}`);
  console.log(paths);
  return { paths, fallback: "blocking" };
};

export const getStaticProps= async (context) => {
  console.log(context);
  const id = context.params.id;
  const data = await client.get({
    endpoint: "blogs",
    queries: { filters: `subcategory[equals]${id}` },
  });
  const API_SUB_CATEGORY = `${API_URL_M_CMS}/subcategory`;
  return {
    props: {
      fallback: {
        [API_SUB_CATEGORY]: data,
      },
    },
    revalidate: 10,
  };
};

export const SubCategoryList = (props) => {
  const { fallback } = props;
  return (
    <>
      <Head>
        <title>Onesite - 記事一覧</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <SWRConfig value={{ fallback }}>
        <SubCategoryListItem />
      </SWRConfig>
    </>
  );
};

export default SubCategoryList;
