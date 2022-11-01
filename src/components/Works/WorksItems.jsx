import Image from "next/image";
import Link from "next/link";
import styles from "src/components/Category/Category.module.css";
import classes from "src/styles/Home.module.css";

export const WorksItems = (props) => {
  const WorksPostsList = props.posts.posts;

  return (
    <>
      <div className="w-11/12 max-w-3xl mx-auto mt-6">
        <section>
          <h1
            className={`font-bold tracking-wide text-center ${styles.title} dark:text-slate-100`}
          >
            Works
          </h1>
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
              <li>Works</li>
            </ol>
          </nav>
          <div className="grid grid-cols-2 gap-3 mt-4 md:grid-cols-1 md:gap-2">
            {WorksPostsList.map((works) => (
              <article
                key={works.FrontMatter.id}
                className={`text-center bg-gradient-to-tr from-post-bg-t to-post-bg-b rounded-2xl ${styles.categoryPost} transition duration-100 ${classes.hoverShadow} dark:from-post-bg-t-dark dark:to-post-bg-b-dark dark:hover:opacity-80 dark:hover:duration-150`}
              >
                <Link href={`/works/${works.slug}`}>
                  <a className="block pb-3">
                    <Image
                      src={works.FrontMatter.coverImg}
                      alt={works.FrontMatter.alt}
                      width={1200}
                      height={630}
                      className="rounded-t-2xl"
                    />
                    <p
                      className={`font-medium mt-2 text-sky-600 ${styles.category} dark:text-slate-200 tracking-wide`}
                    >
                      {works.FrontMatter.category}
                    </p>
                    <div className="text-center px-3">
                      <h2
                        className={`font-bold mt-1 mb-2 inline-block text-left ${styles.postTitle} dark:text-slate-100`}
                      >
                        {works.FrontMatter.title}
                      </h2>
                    </div>
                    <p className="text-sm text-slate-600 font-medium dark:text-slate-200">
                      {works.FrontMatter.tech}
                    </p>
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

export default WorksItems;
