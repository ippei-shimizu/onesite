import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { API_URL_M_CMS } from "src/utils/const";
import WorksItems from "src/components/Works/WorksItems";

export default function WorksPosts(posts) {
  return (
    <>
      <Head>
        <title>Onesite - Works 制作実績</title>
        <meta name="description" content="Generated by create next app" />
        <meta property="og:url" content={`${API_URL_M_CMS}/works`} />
        <meta
          property="og:title"
          content="Onesite - フロントエンドの技術アウトプットブログ"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://onesite-rouge.vercel.app/onesite-ogp.jpg"
        />
      </Head>
      <WorksItems posts={posts} />
    </>
  );
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("src/posts"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(
      path.join("src/posts", filename),
      "utf-8"
    );

    const { data: FrontMatter } = matter(markdownWithMeta);

    return {
      slug,
      FrontMatter,
    };
  });

  return {
    props: {
      posts: posts,
    },
  };
};
