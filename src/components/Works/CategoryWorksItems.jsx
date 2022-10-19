import Image from "next/image";
import Link from "next/link";
import { useFetchArray } from "src/hooks/useFetchArray";
import Head from "next/head";
import styles from "src/components/Category/Category.module.css";
import classes from "src/styles/Home.module.css";
import { API_URL_M_CMS } from "src/utils/const";

export const CategoryWorksItems = () => {
  const { data, error, isLoading, isEmpty } = useFetchArray(`blogs`);

  if (isLoading) {
    return (
      <div className="text-lg font-bold text-center w-11/12 max-w-3xl mx-auto mt-10">
        Loading....
      </div>
    );
  }
  if (error) {
    return (
      <div className="text-lg font-bold text-center w-11/12 max-w-3xl mx-auto mt-10">
        error
      </div>
    );
  }
  if (isEmpty) {
    return (
      <div className="text-lg font-bold text-center w-11/12 max-w-3xl mx-auto mt-10 dark:text-slate-200">
        There is no article.
      </div>
    );
  }
  return (
    <>
      <Head>
        <title>Onesite - Works 制作実績</title>
        <meta name="description" content="Generated by create next app" />
        <meta
          property="og:url"
          content={`${API_URL_M_CMS}/categories/${data.contents[0].category.id}`}
        />
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
      <div className="w-11/12 max-w-3xl mx-auto mt-8">
        <section>
          <h1
            className={`font-bold tracking-wide text-center ${styles.title} dark:text-slate-100`}
          >
            {data.contents[0].category.name}
          </h1>
          <nav>
            <ol className="flex justify-center text-sky-500">
              <li>
                <Link href={`/`} prefetch={false}>
                  <a>
                    Home
                    <span className="mx-2 text-stone-900 dark:text-sky-500">
                      /
                    </span>
                  </a>
                </Link>
              </li>
              <li>{data.contents[0].category.name}</li>
            </ol>
          </nav>
          <div className="grid grid-cols-2 gap-6 mt-4 md:grid-cols-1 md:gap-2">
            {data.contents.map((blog) => (
              <article
                key={blog.id}
                className={`text-center bg-gradient-to-tr from-post-bg-t to-post-bg-b rounded-2xl ${styles.categoryPost} transition duration-100 ${classes.hoverShadow} dark:from-post-bg-t-dark dark:to-post-bg-b-dark`}
              >
                <Link href={`/blogs/${blog.id}`} prefetch={false}>
                  <a className="block pb-3">
                    <Image
                      src={blog.eyecatch.url}
                      alt={blog.alt}
                      width={1200}
                      height={630}
                      className="rounded-t-2xl"
                    />
                    <p
                      className={`font-medium mt-1 pt-2 text-sky-600 ${styles.category} dark:text-slate-200`}
                    >
                      {blog.category.name}
                    </p>
                    <div className="text-center px-3">
                      <h2
                        className={`font-bold mt-2 mb-3 inline-block text-left ${styles.postTitle} dark:text-slate-100`}
                      >
                        {blog.title}
                      </h2>
                    </div>
                  </a>
                </Link>
              </article>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default CategoryWorksItems;
