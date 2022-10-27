import Image from "next/image";
import Link from "next/link";
import styles from "src/components/Category/Category.module.css";
import classes from "src/styles/Home.module.css";
import { Pagination } from "../Pagination/Pagination";
import { SubCategoryItem } from "../SubCategory/SubCategoryItem";
import TopHead from "./TopHead";

export const LatestPostsPagination = ({
  id,
  blogs,
  totalCount,
  subCategory,
}) => {

  return (
    <>
      <TopHead />
      <section className="mt-10">
        <div className="w-11/12 max-w-3xl mx-auto">
          <div className="grid grid-cols-5 gap-6 md:grid-cols-1 md:gap-2">
            {blogs.map((blog) => {
              return (
                <article
                  key={blog.id}
                  className={`${styles.article} bg-gradient-to-tl from-post-bg-t to-post-bg-b rounded-3xl transition duration-100 ${classes.hoverShadow} dark:from-post-bg-t-dark dark:to-post-bg-b-dark`}
                >
                  <div className="text-center">
                    <Link href={`/blogs/${blog.id}`} prefetch={false}>
                      <a className="block p-7">
                        <Image
                          src={blog.icon.url}
                          alt={blog.title}
                          width={80}
                          height={80}
                        />
                        <div className="mt-4">
                          <p className="font-medium text-sky-600 dark:text-slate-200">
                            {blog.category.name}
                          </p>
                          <div className="text-center">
                            <h3
                              className={`font-bold my-3 text-lg inline-block text-left dark:text-slate-100`}
                            >
                              {blog.title}
                            </h3>
                          </div>
                          <div>
                            <div className="flex items-end justify-center">
                              <Image
                                src={blog.subcategory[0].icon.url}
                                alt={blog.subcategory[0].icon.url}
                                width={24}
                                height={24}
                              />
                              <p className="text-sm font-bold mr-4 ml-2 dark:text-slate-100">
                                {blog.subcategory[0].name}
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
      <Pagination totalCount={totalCount} id={id} />
      <SubCategoryItem props={subCategory} />
    </>
  );
};
