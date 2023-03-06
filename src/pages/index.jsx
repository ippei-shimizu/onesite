import { client } from "libs/client";
import { LatestPost } from "src/components/Home/LatestPost";
import TopHead from "src/components/Home/TopHead";
import { SubCategoryItem } from "src/components/SubCategory/SubCategoryItem";
import { API_URL_M_CMS, LatestPostLimit } from "src/utils/const";
import { SWRConfig } from "swr";

export const getStaticProps = async () => {
  const blogData = await client.get({
    endpoint: "blogs",
    queries: { limit: 20, offset: 0, limit: LatestPostLimit },
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
      totalCount: blogData.totalCount,
    },
    revalidate: 10,
  };
};

const Home = (props) => {
  const { fallback } = props;

  return (
    <>
      <TopHead />
      <main>
        <SWRConfig value={{ fallback }}>
          <LatestPost totalCount={props.totalCount} />
          <SubCategoryItem props={props.subCategory} />
        </SWRConfig>
      </main>
    </>
  );
};
//test

export default Home;
