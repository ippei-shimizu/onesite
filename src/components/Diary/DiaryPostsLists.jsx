import Link from "next/link";
import styles from "src/components/Category/Category.module.css";

export const DiaryPostsLists = (props) => {
  const posts = props.props;

  return (
    <>
      <div className="w-11/12 max-w-3xl mx-auto mt-6">
        <section>
          <h1
            className={`font-bold tracking-wide text-center ${styles.title} dark:text-slate-100`}
          >
            Diary
          </h1>
          <p className="text-center mb-2 dark:text-slate-200">日々学んだこと・感じたこと</p>
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
              <li>Diary</li>
            </ol>
          </nav>
          <div
            className={`pt-8 pb-12 px-8 mt-4 bg-gradient-to-tr from-post-bg-t to-post-bg-b rounded-3xl ${styles.categoryPost}  dark:from-post-bg-t-dark dark:to-post-bg-b-dark`}
          >
            <ol>
              {posts.map((post) => {
                const date = new Date(
                  post.properties.data.date.start
                ).toLocaleString("en-US", {
                  month: "short",
                  day: "2-digit",
                  year: "numeric",
                });
                return (
                  <li
                    key={post.id}
                    className="border-b border-white pt-6 pb-1 hover:opacity-70 hover:duration-200 dark:border-sky-700"
                  >
                    <Link href={`/diary/${post.id}`}>
                      <a className="flex justify-between items-end">
                        <div>
                          <p className="text-sm text-slate-600 tracking-wider dark:text-slate-300">
                            {date}
                          </p>
                          <h3 className="text-base font-bold pb-1 pt-0.5 dark:text-slate-100">
                            {post.properties.title.title[0].plain_text}
                          </h3>
                        </div>
                        <p className="text-base text-slate-500 pb-1 dark:text-slate-400">
                          Read post →
                        </p>
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>
      </div>
    </>
  );
};

export default DiaryPostsLists;
