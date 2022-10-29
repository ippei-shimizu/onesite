import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import WorksItems from "src/components/Works/WorksItems";
import { sortByDate } from "src/utils/sortByDate";

export default function WorksPosts(posts) {
  return (
    <>
      <Head>
        <title>Onesite - Works 制作実績</title>
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
      posts: posts.sort(sortByDate),
    },
  };
};
