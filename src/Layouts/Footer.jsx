import Image from "next/image";
import Link from "next/link";

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
      <footer className="mt-10">
        <div className="w-11/12 max-w-3xl mx-auto">
          <div className="mb-36">
            <ul className="grid grid-cols-4 gap-6">
              {SNS_LIST.map((sns) => {
                return (
                  <li
                    key={sns.href}
                    className={`rounded-3xl text-center py-8 ${sns.class}`}
                  >
                    <Link href={sns.href}>
                      <a className="block">
                        <Image
                          src={sns.src}
                          alt={sns.alt}
                          width={64}
                          height={64}
                          className="block mx-auto"
                        />
                        <p className="text-white font-bold text-sm mt-1">
                          {sns.id}
                        </p>
                      </a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="text-center">
          <Image
                src="/logo.svg"
                alt="Onesite Logo"
                width={124}
                height={32}
              />
              <p className="text-xs mb-3">&copy; 2022 Ippei Shimizu</p>
          </div>
        </div>
      </footer>
    </>
  );
};
