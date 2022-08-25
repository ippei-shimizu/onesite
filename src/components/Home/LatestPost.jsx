import Image from "next/image";
import Link from "next/link";
import { useFetchArray } from "src/hooks/useFetchArray";
import styles from "src/components/Category/Category.module.css";
import formatDate from "libs/utils";

export const LatestPost = () => {
  const { data, error, isLoading, isEmpty } = useFetchArray(`blogs`);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>error</div>;
  }
  if (isEmpty) {
    return <div>最新の記事はありません</div>;
  }
  return (
    <>
      <section className="mt-10">
        <div className="w-11/12 max-w-3xl mx-auto">
          <div className="grid grid-cols-3 gap-6">
            {data.contents.map((content) => {
              return (
                <article
                  key={content.id}
                  className={`${styles.article} bg-gradient-to-r from-post-bg-t to-post-bg-b`}
                >
                  <div className="flex">
                    <Link href={`/blogs/${content.id}`} prefetch={false}>
                      <a>
                        <Image
                          src={content.icon.url}
                          alt={content.title}
                          width={68}
                          height={68}
                        />
                      </a>
                    </Link>
                    <div className="ml-4">
                      <Link
                        href={`/categories/${content.category.id}`}
                        prefetch={false}
                      >
                        <a>
                          <p className={`font-medium ${styles.category}`}>
                            {content.category.name}
                          </p>
                        </a>
                      </Link>
                      <Link href={`/blogs/${content.id}`} prefetch={false}>
                        <a>
                          <h3 className={`font-bold my-1 ${styles.postTitle}`}>
                            {content.title}
                          </h3>
                        </a>
                      </Link>
                      <div className="flex justify-between items-center">
                        <div>
                          <Link
                            href={`/subcategory/${content.subcategory[0].id}`}
                            prefetch={false}
                          >
                            <a className="flex items-center">
                              <Image
                                src={content.subcategory[0].icon.url}
                                alt={content.subcategory[0].icon.url}
                                width={34}
                                height={34}
                              />
                              <p className="ml-1">
                                {content.subcategory[0].name}
                              </p>
                            </a>
                          </Link>
                        </div>
                        <p className="flex items-center">
                          <Image
                            src="/clock.svg"
                            alt="日時"
                            width={22}
                            height={22}
                          />
                          <time className="ml-1 text-sm">
                            {formatDate(content.updatedAt)}
                          </time>
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
