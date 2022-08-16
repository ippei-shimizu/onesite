import { client } from "libs/client";

export const BlogsId = ({ blogs }) => {
  return (
    <main>
      <h1>{blogs.title}</h1>
      <p>{blogs.publishedAt}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${blogs.body}`,
        }}
      />
    </main>
  );
};

export default BlogsId;

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blogs" });

  const paths = data.contents.map((content) => `/blogs/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blogs", contentId: id });

  return {
    props: {
      blogs: data,
    },
  };
};
