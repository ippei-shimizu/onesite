import { client } from "libs/client";
import { CategoryItems } from "src/components/Category/CategoryItems";
import { API_URL_M_CMS } from "src/utils/const";
import { SWRConfig } from "swr";

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "categories" });
  const paths = data.contents.map((content) => `/categories/${content.id}`);
  return { paths, fallback: "blocking" };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({
    endpoint: "blogs",
    queries: { filters: `category[equals]${id}` },
  });
  const API_CATEGORY = `${API_URL_M_CMS}/blogs`;
  return {
    props: {
      fallback: {
        [API_CATEGORY]: data,
      },
      id
    },
    revalidate: 10,
  };
};

export const CategoryList = (props) => {
  const { fallback } = props;
  return (
    <>
      <SWRConfig value={{ fallback }}>
        <CategoryItems />
      </SWRConfig>
    </>
  );
};

export default CategoryList;
