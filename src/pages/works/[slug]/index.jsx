import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import { WorksPostDetail } from "src/components/Works/WorksPostDetail";

export default function WorksPost(props) {
  const FrontMatter = props.FrontMatter;

  return (
    <>
      <Head>
        <title>{FrontMatter.title} - 制作実績</title>
        <meta name="robots" content="noindex" />
      </Head>
      <WorksPostDetail props={props} />
    </>
  );
}

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("src/posts"));
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("src/posts", slug + ".md"),
    "utf-8"
  );
  const { data: FrontMatter, content } = matter(markdownWithMeta);

  return {
    props: {
      FrontMatter,
      slug,
      content,
    },
  };
};
