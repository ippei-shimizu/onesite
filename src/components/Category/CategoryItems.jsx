import Image from "next/image";
import Link from "next/link";
import { formatDate } from "libs/utils";
import { useFetchArray } from "src/hooks/useFetchArray";

export const CategoryItems = () => {
  const { data, error, isLoading, isEmpty } = useFetchArray(`blogs`);
  // console.log(data);

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
    <main>
      <div>
        <h1></h1>
        <div>
          {data.contents.map((blog) => (
            <article key={blog.id}>
              <Link href={`/blogs/${blog.id}`} prefetch={false}>
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
  );
};
