import Image from "next/image";
import Link from "next/link";
import { useFetchArray } from "src/hooks/useFetchArray";
import styles from "src/components/Category/Category.module.css";
import Head from "next/head";
import classes from "src/styles/Home.module.css";

export const SubCategoryListItem = () => {
  const { data, error, isLoading, isEmpty } = useFetchArray(`subcategory`);

  if (isLoading) {
    return (
      <div className="text-lg font-bold text-center w-11/12 max-w-3xl mx-auto mt-10">
        Loading...
      </div>
    );
  }
  if (error) {
    return (
      <div className="text-lg font-bold text-center w-11/12 max-w-3xl mx-auto mt-10">
        Error
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
        <title>Onesite - {data.contents[0].subcategory[0].name}記事一覧</title>
        <meta
          name="description"
          content="山梨県でWebコーダーとしてWeb制作に携わっています。フロントエンド開発やWeb制作について学んだことをアウトプットしていきます。"
        />
      </Head>
      <div className="w-11/12 max-w-3xl mx-auto mt-6">
        <section>
          <h1
            className={`font-bold tracking-wide text-center ${styles.title} dark:text-slate-100`}
          >
            {data.contents[0].subcategory[0].name}
          </h1>
          <nav>
            <ol className="flex  justify-center text-sky-500">
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
              <li>{data.contents[0].subcategory[0].name}</li>
            </ol>
          </nav>
          <div className="grid grid-cols-2 gap-3 mt-4 md:grid-cols-1 md:gap-2">
            {data.contents.map((content) => (
              <article
                key={content.id}
                className={`text-center bg-gradient-to-tr from-post-bg-t to-post-bg-b rounded-3xl ${styles.categoryPost} transition duration-100 ${classes.hoverShadow} dark:from-post-bg-t-dark dark:to-post-bg-b-dark dark:hover:opacity-90 dark:hover:duration-200`}
              >
                <Link href={`/blogs/${content.id}`} prefetch={false}>
                  <a className="block pt-8 pb-7 px-4">
                    <Image
                      src={content.icon.url}
                      alt={content.alt}
                      width={70}
                      height={70}
                      className="rounded-xl"
                    />
                    <p
                      className={`font-medium mt-2 text-sky-600 ${styles.category} dark:text-slate-200`}
                    >
                      {content.category.name}
                    </p>
                    <div className="text-center">
                      <h2
                        className={`font-bold mt-2 mb-3 inline-block text-left ${styles.postTitle} dark:text-slate-100`}
                      >
                        {content.title}
                      </h2>
                    </div>
                    <div className="flex justify-center items-center">
                      <Image
                        src={content.subcategory[0].icon.url}
                        alt={content.subcategory[0].icon.url}
                        width={24}
                        height={24}
                      />
                      <p className="ml-2 text-base font-bold mr-4 dark:text-slate-100">
                        {content.subcategory[0].name}
                      </p>
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
