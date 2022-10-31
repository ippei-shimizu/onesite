import { client } from "libs/client";
import { BlogDetail } from "src/components/Blog/BlogDetail";
import { SubCategoryItem } from "src/components/SubCategory/SubCategoryItem";
import { API_URL_M_CMS } from "src/utils/const";
import { SWRConfig } from "swr";
import cheerio from "cheerio";
import hljs from "highlight.js";

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
  const subCategoryData = await client.get({ endpoint: "subcategory" });
  const CategoryData = await client.get({ endpoint: "categories" });

  const $ = cheerio.load(data.content);
  $("pre code").each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass("hljs");
  });

  return {
    props: {
      fallback: {
        [API]: data,
      },
      categories: CategoryData,
      subCategory: subCategoryData.contents,
      highlightedBody: $.html(),
    },
    revalidate: 10,
  };
};

export const BlogsId = (props) => {
  const { fallback } = props;

  return (
    <>
      <SWRConfig value={{ fallback }}>
        <BlogDetail props={props.highlightedBody} />
        <SubCategoryItem props={props.subCategory} />
      </SWRConfig>
    </>
  );
};

export default BlogsId;
