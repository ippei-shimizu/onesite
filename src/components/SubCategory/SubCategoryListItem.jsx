import Image from "next/image";
import Link from "next/link";
import { useFetchArray } from "src/hooks/useFetchArray";
import styles from "src/components/Category/Category.module.css";
import formatDate from "libs/utils";

export const SubCategoryListItem = () => {
  const { data, error, isLoading, isEmpty } = useFetchArray(`subcategory`);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error</div>;
  }
  if (isEmpty) {
    return <div>ブログ記事はありません</div>;
  }
  console.log(data);
  return (
    <>
      <div className="w-11/12 max-w-7xl mx-auto">
        <section className="pt-28">
          <h1 className={`font-bold tracking-wide ${styles.title}`}>
            {data.contents[0].subcategory[0].name}
          </h1>
          <nav>
            <ol className="flex text-sky-500">
              <li>
                <Link href={`/`} prefetch={false}>
                  <a>
                    Home<span className="mx-2 text-stone-900">/</span>
                  </a>
                </Link>
              </li>
              <li>{data.contents[0].subcategory[0].name}</li>
            </ol>
          </nav>
          <div className="grid grid-cols-3 gap-6 mt-14">
            {data.contents.map((content) => (
              <article key={content.id}>
                <Link href={`/blogs/${content.id}`} prefetch={false}>
                  <a>
                    <Image
                      src={content.eyecatch.url}
                      alt={content.alt}
                      width={content.eyecatch.width}
                      height={content.eyecatch.height}
                      className="rounded-xl"
                    />
                    <p
                      className={`font-medium mt-2 text-sky-500 ${styles.category}`}
                    >
                      {content.category.name}
                    </p>
                    <h2 className={`font-bold my-2 ${styles.postTitle}`}>
                      {content.title}
                    </h2>
                  </a>
                </Link>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Image
                      src={content.subcategory[0].icon.url}
                      alt={content.subcategory[0].icon.url}
                      width={42}
                      height={42}
                    />
                    <p className="ml-1">{content.subcategory[0].name}</p>
                  </div>
                  <p className="flex items-center">
                    <Image src="/clock.svg" alt="日時" width={22} height={22} />
                    <time className="ml-1">
                      {formatDate(content.updatedAt)}
                    </time>
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};
