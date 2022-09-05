import Image from "next/image";
import Link from "next/link";
import styles from "src/components/SubCategory/SubCategory.module.css";

export const SubCategoryItem = (props) => {
  return (
    <>
      <section className="w-11/12 max-w-3xl mx-auto mt-10">
        <ul className="grid grid-cols-3 gap-4">
          {props.props.map((sub) => {
            return (
              <li
                key={sub.id}
                className={`py-4 px-5 rounded-2xl ${styles.bgColor}`}
              >
                <Link href={`/subcategory/${sub.id}`} prefetch={false}>
                  <a className="flex items-center">
                    <Image
                      src={sub.icon.url}
                      alt={sub.alt}
                      width={28}
                      height={28}
                    />
                    <h3 className="ml-2 text-base font-bold">{sub.name}</h3>
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
