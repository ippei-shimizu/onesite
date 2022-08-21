import Image from "next/image";
import Link from "next/link";
import { useFetchArray } from "src/hooks/useFetchArray";
import styles from "src/components/Category/Category.module.css";
import formatDate from "libs/utils";

export const LatestPost = () => {
  const { data, error, isLoading, isEmpty } = useFetchArray(`blogs`);

  if(isLoading) {
    return <div>Loading...</div>
  }
  if(error) {
    return <div>error</div>
  }
  if(isEmpty) {
    return <div>最新の記事はありません</div>
  }
  return (
    <>
    <section className="mt-28">
      <div className="w-11/12 max-w-6xl mx-auto">
        <h2 className="mt-20 mb-8 text-5xl font-bold">Latest Post</h2>
        <div className="grid grid-cols-3 gap-x-6 gap-y-8">
          {data.contents.map((content)=> {
            return (
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
                    <h3 className={`font-bold my-2 ${styles.postTitle}`}>
                      {content.title}
                    </h3>
                  </a>
                </Link>
                <div className="flex justify-between items-center">
                  <div>
                    <Link href={`/subcategory/${content.subcategory[0].id}`}>
                      <a className="flex items-center">
                        <Image
                          src={content.subcategory[0].icon.url}
                          alt={content.subcategory[0].icon.url}
                          width={42}
                          height={42}
                        />
                        <p className="ml-1">{content.subcategory[0].name}</p>
                      </a>
                    </Link>
                  </div>
                  <p className="flex items-center">
                    <Image src="/clock.svg" alt="日時" width={22} height={22} />
                    <time className="ml-1 text-sm">
                      {formatDate(content.updatedAt)}
                    </time>
                  </p>
                </div>
              </article>
              )
          })}
        </div>
      </div>
    </section>
    </>
  )
};
