import Image from "next/image";
import Link from "next/link";
import styles from "src/components/SubCategory/SubCategory.module.css";
import classes from "src/styles/Home.module.css";

export const SubCategoryItem = (props) => {
  return (
    <>
      <section className="w-11/12 max-w-3xl mx-auto mt-10">
        <ul className="grid grid-cols-3 gap-4 md:grid-cols-2 md:gap-2">
          {props.props.map((sub) => {
            return (
              <li
                key={sub.id}
                className={`rounded-2xl ${styles.bgColor} transition duration-100 ${classes.hoverShadow} dark:bg-gradient-to-tl dark:from-subCategory-bg-t-dark dark:to-subCategory-bg-l-dark dark:hover:opacity-90 dark:hover:duration-200`}
              >
                <Link href={`/subcategory/${sub.id}`} prefetch={false}>
                  <a className="flex items-center py-4 px-5">
                    <Image
                      src={sub.icon.url}
                      alt={sub.alt}
                      width={28}
                      height={28}
                    />
                    <h3 className="ml-2 text-base font-bold dark:text-slate-100 ">
                      {sub.name}
                    </h3>
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};
