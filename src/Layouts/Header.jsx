import Image from "next/image";
import Link from "next/link";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/categories/web-production", label: "Web Production" },
  { href: "/categories/front-end", label: "Front End" },
  { href: "/categories/design", label: "Design" },
  { href: "/categories/life-style", label: "Life Style" },
];

export const Header = () => {
  return (
    <header className="h-16 flex justify-center items-center w-full fixed z-50">
      <div className="w-11/12 max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" prefetch={false}>
          <a>
            <Image src="/logo.svg" alt="Onesite Logo" width={105} height={26} />
          </a>
        </Link>
        <nav>
          <ul className="flex space-x-8">
            {NAV_ITEMS.map((item) => {
              return (
                <li key={item.href}>
                  <Link href={item.href} prefetch={false}>
                    <a>{item.label}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="flex space-x-6 items-center">
          <ul className="flex space-x-3 items-center">
            <li className="h-7">
              <Image  src="/search.svg" alt="検索する" width={30} height={30} />
            </li>
            <li className="h-7">
              <Image  src="/sun.svg" alt="ダークモード切り替えボタン" width={30} height={30} />
            </li>
          </ul>
          <div className="w-10">
          <span className="block w-10 h-0.5 bg-black"></span>
          <span className="block w-5 h-0.5 bg-black mt-2.5 mb-2.5 ml-auto mr-0"></span>
          <span className="block w-10 h-0.5 bg-black"></span>
        </div>
        </div>
      </div>
    </header>
  );
};
