import Image from "next/image";
import Link from "next/link";
import styles from "../Layouts/Footer.module.css";

const SNS_LIST = [
  {
    href: "https://github.com/ippei-shimizu",
    src: "/github.svg",
    alt: "github",
    width: 28,
    height: 28,
    id: "@ippei-shimizu",
    class: "bg-black",
  },
  {
    href: "https://codepen.io/ippei-shimizu",
    src: "/codepen.svg",
    alt: "codepen",
    width: 28,
    height: 28,
    id: "@ippei-shimizu",
    class: "bg-gray-700",
  },
  {
    href: "https://twitter.com/ippei_111",
    src: "/twitter.svg",
    alt: "twitter",
    width: 28,
    height: 28,
    id: "@ippei_111",
    class: "bg-sky-500",
  },
  {
    href: "https://www.instagram.com/ippei_5/",
    src: "/instagram.svg",
    alt: "instagram",
    width: 28,
    height: 28,
    id: "@ippei_5",
    class: "bg-pink-600",
  },
];

const PAGE_LIST = [
  { href: "/contact", id: "Contact" },
  { href: "/privacy-policy", id: "Privacy Policy" },
];

export const Footer = (contents) => {
  const CategoryList = contents.contents.categories;
  const SubCategoryList = contents.contents.subCategory;
  return (
    <>
      <footer className={`mt-40 ${styles.footer}`}>
        <div className="w-11/12 max-w-6xl mx-auto">
          <div>
            {/* <Image src="/profile.png" alt="清水一平" width={83} height={83} /> */}
            {/* <h5 className="text-lg font-bold">Ippei Shimizu</h5> */}

            {/* <p className="text-base text-gray-500 mr-4">
                    Yamanashi / web coder
                  </p> */}
            <ul className="grid grid-cols-4 gap-6">
              {SNS_LIST.map((sns) => {
                return (
                  <li key={sns.href} className={`rounded-lg ${sns.class}`}>
                    <Link href={sns.href}>
                      <a className="flex items-center py-4 px-7 space-x-3">
                        <Image
                          src={sns.src}
                          alt={sns.alt}
                          width={sns.width}
                          height={sns.height}
                        />
                        <p className="text-white font-medium text-base">{sns.id}</p>
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="mt28">
            <Image src="/logo.svg" alt="Onesite" width={184} height={45} />
            <div>
              <ul>
                {CategoryList.contents.map((content) => {
                  return (
                    <li key={content.id}>
                      <Link href={`/categories/${content.id}`}>
                        <a>{content.name}</a>
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <ul>
                {PAGE_LIST.map((page) => {
                  return (
                    <li key={page.href}>
                      <Link href={`${page.href}`}>
                        <a>{page.name}</a>
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <ul>
                {SubCategoryList.map((sub) => {
                  return (
                    <li key={sub.id}>
                      <Link href={`/subcategory/${sub.id}`}>
                        <a>{sub.name}</a>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
