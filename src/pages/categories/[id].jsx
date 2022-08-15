import { client } from "libs/client";
import { formatDate } from "libs/utils";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export const CategoryList = ({ blogs }) => {
  // カテゴリーに紐付いたコンテンツがない場合に表示
  if (blogs.length === 0) {
    return <div>ブログコンテンツがありません</div>;
  }
  return (
    <>
      <Head>
        <title>- Onesite フロントエンドの技術アウトプットブログ</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main>
        <div>
          <h1></h1>
          <div>
            {blogs.map((blog) => (
              <article key={blog.id}>
                <Link href={`/blogs/${blog.id}`}>
                  <a>
                    <Image
                      src={blog.eyecatch.url}
                      alt={blog.alt}
                      width={blog.eyecatch.width}
                      height={blog.eyecatch.height}
                    />
                    <p>{blog.category.name}</p>
                    <h2>{blog.title}</h2>
                  </a>
                </Link>
                <div>
                  <div>
                  <Image
                      src={blog.subcategory.icon.url}
                      alt={blog.subcategory.icon.alt}
                      width={blog.subcategory.icon.width}
                      height={blog.subcategory.icon.height}
                    />
                    <p>{blog.subcategory.name}</p>
                  </div>
                  <p>
                    <Image src="/clock.svg" alt="日時" width={22} height={22} />
                    <time>{formatDate(blog.updatedAt)}</time>
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default CategoryList;

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "categories" });
  const paths = data.contents.map((content) => `/categories/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({
    endpoint: "blogs",
    queries: { filters: `category[equals]${id}` },
  });
  console.log(data.contents);
  return {
    props: {
      blogs: data.contents,
    },
  };
};
