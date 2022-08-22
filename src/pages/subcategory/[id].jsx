import { client } from "libs/client";
import { SubCategoryItem } from "src/components/SubCategory/SubCategoryItem";
import { SubCategoryListItem } from "src/components/SubCategory/SubCategoryListItem";
import { Footer } from "src/Layouts/Footer";
import { API_URL_M_CMS } from "src/utils/const";
import { SWRConfig } from "swr";

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "subcategory" });
  const paths = data.contents.map((content) => `/subcategory/${content.id}`);
  return { paths, fallback: "blocking" };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({
    endpoint: "blogs",
    queries: { filters: `subcategory[contains]${id}` },
  });
  const API_SUB_CATEGORY = `${API_URL_M_CMS}/subcategory`;
  const subCategoryData = await client.get({ endpoint: "subcategory" });
  const CategoryData = await client.get({ endpoint: "categories" });
  return {
    props: {
      fallback: {
        [API_SUB_CATEGORY]: data,
      },
      categories: CategoryData,
      subCategory: subCategoryData.contents,
    },
    revalidate: 10,
  };
};

export const SubCategoryList = (props) => {
  const { fallback } = props;
  return (
    <>
      <SWRConfig value={{ fallback }}>
        <SubCategoryListItem />
        <SubCategoryItem props={props.subCategory} />
        <Footer contents={props} />
      </SWRConfig>
    </>
  );
};

export default SubCategoryList;
