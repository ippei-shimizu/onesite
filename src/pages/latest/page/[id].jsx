import { client } from "libs/client";
import { LatestPostsPagination } from "src/components/Home/LatestPostsPagination";

const PER_PAGE = 5;

export default function LatestPageId({ blogs, totalCount, subCategory }) {
  return (
    <>
      <LatestPostsPagination blogs={blogs} totalCount={totalCount} subCategory={subCategory} />
    </>
  );
}

export const getStaticPaths = async () => {
  const repos = await client.get({ endpoint: "blogs" });

  const pageNumbers = [];

  const range = (start, end) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  const paths = range(1, Math.ceil(repos.totalCount / PER_PAGE)).map(
    (repo) => `/latest/page/${repo}`
  );

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;

  const data = await client.get({
    endpoint: "blogs",
    queries: { offset: (id - 1) * 5, limit: 5 },
  });

  const subCategoryData = await client.get({ endpoint: "subcategory" });

  return {
    props: {
      blogs: data.contents,
      totalCount: data.totalCount,
      subCategory: subCategoryData.contents,
    },
  };
};
