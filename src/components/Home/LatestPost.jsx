import Image from "next/image";
import Link from "next/link";
import { useFetchArray } from "src/hooks/useFetchArray";
import styles from "src/components/Category/Category.module.css";

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
          <div className="grid grid-cols-5 gap-6">
            {data.contents.map((content) => {
              return (
                <article
                  key={content.id}
                  className={`${styles.article} bg-gradient-to-r from-post-bg-t to-post-bg-b p-7 rounded-3xl`}
                >
                  <div className="text-center">
                    <Link href={`/blogs/${content.id}`} prefetch={false}>
                      <a className="block">
                        <Image
                          src={content.icon.url}
                          alt={content.title}
                          width={80}
                          height={80}
                        />
                      </a>
                    </Link>
                    <div className="mt-4">
                      <Link href={`categories/${content.category.id}`}>
                        <a>
                          <p className="font-bold text-sky-600">
                            {content.category.name}
                          </p>
                        </a>
                      </Link>
                      <Link href={`/blogs/${content.id}`} prefetch={false}>
                        <a>
                          <h3 className={`font-bold my-3 text-base`}>
                            {content.title}
                          </h3>
                        </a>
                      </Link>
                      <div>
                        <div>
                          <Link
                            href={`/subcategory/${content.subcategory[0].id}`}
                            prefetch={false}
                          >
                            <a className="flex items-center justify-center">
                              <Image
                                src={content.subcategory[0].icon.url}
                                alt={content.subcategory[0].icon.url}
                                width={32}
                                height={32}
                              />
                              <p className="text-sm font-medium mr-4 ml-1">
                                {content.subcategory[0].name}
                              </p>
                            </a>
                          </Link>
                        </div>
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
