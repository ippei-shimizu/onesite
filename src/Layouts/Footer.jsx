import Image from "next/image";
import Link from "next/link";
import styles from "../Layouts/Footer.module.css";

const SNS_LIST = [
  {
    href: "https://github.com/ippei-shimizu",
    src: "/github.svg",
    alt: "github",
    width: 24,
    height: 24,
  },
  {
    href: "https://codepen.io/ippei-shimizu",
    src: "/codepen.svg",
    alt: "codepen",
    width: 24,
    height: 24,
  },
  {
    href: "https://twitter.com/ippei_111",
    src: "/twitter.svg",
    alt: "twitter",
    width: 24,
    height: 24,
  },
  {
    href: "https://www.instagram.com/ippei_5/",
    src: "/instagram.svg",
    alt: "instagram",
    width: 24,
    height: 24,
  },
];

const PAGE_LIST = [
  { href: "/contact", name: "Contact" },
  { href: "/privacy-policy", name: "Privacy Policy" },
];

export const Footer = (contents) => {
  const CategoryList = contents.contents.categories;
  const SubCategoryList = contents.contents.subCategory;
  return (
    <>
      <footer className={`mt-40 ${styles.footer}`}>
        <div className="w-11/12 max-w-6xl mx-auto">
          <h4 className="pt-16 mb-8 text-5xl font-bold">Profile</h4>
          <div className="bg-white border border-slate-200 rounded p-12">
            <div className="flex items-center">
              <Image src="/profile.png" alt="清水一平" width={83} height={83} />
              <div className="ml-6">
                <h5 className="text-lg font-bold">Ippei Shimizu</h5>
                <div className="flex items-center">
                  <p className="text-base text-gray-500 mr-4">
                    Yamanashi / web coder
                  </p>
                  <ul className="flex mt-1 space-x-3">
                    {SNS_LIST.map((sns) => {
                      return (
                        <li key={sns.href}>
                          <Link href={sns.href}>
                            <a>
                              <Image
                                src={sns.src}
                                alt={sns.alt}
                                width={sns.width}
                                height={sns.height}
                              />
                            </a>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <p className="mt-6 leading-6">
              テキスト□テキスト□テキスト□テキスト□テキスト□テキスト□テキスト□テキスト□テキスト□テキスト□テキスト□テキスト□テキスト□
              テキスト□テキスト□テキスト□テキスト□テキスト□テキスト□テキスト□テキスト□テキスト□テキスト□テキスト□テキスト□テキスト□
              テキスト□テキスト□テキスト□テキスト□テキスト□テキスト□テキスト□テキスト□テキスト□テキスト□テキスト□テキスト□テキスト□
              テキスト□テキスト□テキスト□テキスト□テキスト□
            </p>
          </div>
          <div className="mt-24">
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
