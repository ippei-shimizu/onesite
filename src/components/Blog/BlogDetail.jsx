import { useRouter } from "next/router";
import { useFetch } from "src/hooks/useFetch";
import { API_URL_M_CMS } from "src/utils/const";
import styles from "src/components/Blog/BlogDetail.module.css";
import Link from "next/link";
import Image from "next/image";
import formatDate from "libs/utils";

// データをテンプレートに受け渡す部分の処理を記述します
// export const getStaticProps = async () => {
//   const subCategoryData = await client.get({ endpoint: "subcategory" });
//   return {
//     props: {
//       subCategory: subCategoryData.contents,
//     },
//     revalidate: 10,
//   };
// };

export const BlogDetail = () => {
  const router = useRouter();
  const { data, error, isLoading } = useFetch(
    router.query.id ? `${API_URL_M_CMS}/blogs/${router.query.id}` : null
  );

  if (isLoading) {
    return <div>Loading....</div>;
  }
  if (error) {
    return <div>error</div>;
  }
  console.log(data);
  return (
    <main>
      <div className="w-11/12 max-w-3xl mx-auto mt-10">
        <div className="text-center">
          <Image src={data.icon.url} alt="icon" width={90} height={90} />
        </div>
        <div className="text-center">
          <h1
            className={`font-bold tracking-wide mt-1 inline-block text-left ${styles.title}`}
          >
            {data.title}
          </h1>
        </div>
        <nav className="mt-6 mb-9">
          <ol className="flex justify-center text-sky-500">
            <li>
              <Link href={`/`} prefetch={false}>
                <a>
                  Home<span className="mx-2 text-stone-900">/</span>
                </a>
              </Link>
            </li>
            <li>
              <Link href={`/categories/${data.category.id}`}>
                <a>{data.category.name}</a>
              </Link>
            </li>
          </ol>
        </nav>
      </div>
      <div className="w-11/12 max-w-3xl mx-auto bg-white mt-6 py-10 px-10 rounded-3xl">
        <Image
          src={data.eyecatch.url}
          alt={data.eyecatch.alt}
          width={1200}
          height={630}
          className="rounded-3xl"
        />
        <div className="flex items-center mt-2">
          <Image src="/clock.svg" alt="投稿日時" width={20} height={20} />
          <p
            className="ml-1 text-base tracking-normal
          "
          >
            <time>{formatDate(data.date)}</time>
          </p>
        </div>
        <div
          className="mt-14"
          dangerouslySetInnerHTML={{
            __html: `${data.content}`,
          }}
        />
      </div>
      {/* <SubCategoryItem props={props.subCategory} /> */}
    </main>
  );
};
