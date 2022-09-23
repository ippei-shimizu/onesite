import Image from "next/image";
import Link from "next/link";
import { useFetchArray } from "src/hooks/useFetchArray";
import styles from "src/components/Category/Category.module.css";

export const LatestPost = () => {
  const { data, error, isLoading, isEmpty } = useFetchArray(`blogs`);

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
        error
      </div>
    );
  }
  if (isEmpty) {
    return (
      <div className="text-lg font-bold text-center w-11/12 max-w-3xl mx-auto mt-10">
        最新の記事はありません
      </div>
    );
  }
  return (
    <>
      <section className="mt-10">
        <div className="w-11/12 max-w-3xl mx-auto">
          <div className="grid grid-cols-5 gap-6 md:grid-cols-1 md:gap-2">
            {data.contents.map((content) => {
              return (
                <article
                  key={content.id}
                  className={`${styles.article} bg-gradient-to-tl from-post-bg-t to-post-bg-b p-7 rounded-3xl`}
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
                        <div className="mt-4">
                          <p className="font-medium text-sky-600">
                            {content.category.name}
                          </p>
                          <div className="text-center">
                            <h3
                              className={`font-bold my-3 text-lg inline-block text-left`}
                            >
                              {content.title}
                            </h3>
                          </div>
                          <div>
                            <div className="flex items-end justify-center">
                              <Image
                                src={content.subcategory[0].icon.url}
                                alt={content.subcategory[0].icon.url}
                                width={24}
                                height={24}
                              />
                              <p className="text-sm font-bold mr-4 ml-2">
                                {content.subcategory[0].name}
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </Link>
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
