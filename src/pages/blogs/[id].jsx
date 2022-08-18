import { client } from "libs/client";
import { BlogDetail } from "src/components/Blog/BlogDetail";
import { API_URL_M_CMS } from "src/utils/const";
import { SWRConfig } from "swr";

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blogs" });
  const paths = data.contents.map((content) => `/blogs/${content.id}`);
  return { paths, fallback: "blocking" };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blogs", contentId: id });
  const API = `${API_URL_M_CMS}/blogs/${id}`;
  return {
    props: {
      fallback: {
        [API]: data,
      },
    },
    revalidate: 10,
  };
};

export const BlogsId = (props) => {
  const { fallback } = props;
  return (
    <>
      <SWRConfig value={{ fallback }}>
        <BlogDetail />
      </SWRConfig>
    </>
  );
};

export default BlogsId;
