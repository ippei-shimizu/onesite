import Image from "next/image";
import Link from "next/link";
import { formatDate } from "libs/utils";
import { useFetchArray } from "src/hooks/useFetchArray";
import Head from "next/head";
import styles from "src/components/Category/Category.module.css";

export const CategoryItems = () => {
  const { data, error, isLoading, isEmpty } = useFetchArray(`blogs`);

  if (isLoading) {
    return <div>Loading....</div>;
  }
  if (error) {
    return <div>error</div>;
  }
  if (isEmpty) {
    return <div>ブログ記事はありません</div>;
  }
  return (
    <>
      <Head>
        <title>Onesite - {data.contents[0].category.name}記事一覧</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main>
        <section className="pt-28 w-11/12 max-w-7xl mx-auto">
          <h1 className={`font-bold tracking-wide ${styles.title}`}>
            {data.contents[0].category.name}
          </h1>
          <div className="grid grid-cols-3 gap-6 mt-9">
            {data.contents.map((blog) => (
              <article key={blog.id}>
                <Link href={`/blogs/${blog.id}`} prefetch={false}>
                  <a>
                    <Image
                      src={blog.eyecatch.url}
                      alt={blog.alt}
                      width={blog.eyecatch.width}
                      height={blog.eyecatch.height}
                      className="rounded-xl"
                    />
                    <p className={`font-medium mt-2 ${styles.category}`}>
                      {blog.category.name}
                    </p>
                    <h2 className={`font-bold my-2 ${styles.postTitle}`}>
                      {blog.title}
                    </h2>
                  </a>
                </Link>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Image
                      src={blog.subcategory.icon.url}
                      alt={blog.subcategory.icon.alt}
                      width={42}
                      height={42}
                    />
                    <p className="ml-1">{blog.subcategory.name}</p>
                  </div>
                  <p className="flex items-center">
                    <Image src="/clock.svg" alt="日時" width={22} height={22} />
                    <time className="ml-1">
                      {formatDate(blog.updatedAt)}
                    </time>
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};
