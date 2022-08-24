import Image from "next/image";
import Link from "next/link";

const NAV_ITEMS = [
  {
    href: "/categories/front-end",
    label: "Front End",
    src: "/frontend.svg",
    src: "/frontend.svg",
    alt: "Front End",
    class:"bg-gradient-to-tl from-nav01-blue-t to-nav01-blue-b"
  },
  {
    href: "/categories/web-production",
    label: "Web Production",
    src: "/webproduction.svg",
    alt: "Web Production",
    class:"bg-gradient-to-tl from-nav02-blue-t to-nav02-blue-b"
  },
  {
    href: "/categories/design",
    label: "Design",
    src: "/design.svg",
    alt: "Design",
    class:"bg-gradient-to-r from-nav03-blue-t to-nav03-blue-b"
  },
  {
    href: "/categories/life-style",
    label: "Life Style",
    src: "/lifestyle.svg",
    alt: "Life Style",
    class:"bg-gradient-to-tl from-nav04-blue-t to-nav04-blue-b"
  },
];

export const Header = () => {
  return (
    <header className="w-full mt-10">
      <div className="w-11/12 max-w-3xl mx-auto">
        <div className="flex justify-between items-center">
          <Link href="/" prefetch={false}>
            <a>
              <h1>
              <Image
                src="/logo.svg"
                alt="Onesite Logo"
                width={148}
                height={36}
              />
              </h1>
            </a>
          </Link>
          <div className="flex space-x-6 items-center">
            <ul className="flex space-x-3 items-center">
              <li className="h-7">
                <Image
                  src="/search.svg"
                  alt="検索する"
                  width={30}
                  height={30}
                />
              </li>
              <li className="h-7">
                <Image
                  src="/sun.svg"
                  alt="ダークモード切り替えボタン"
                  width={30}
                  height={30}
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center mt-9">
          <Image src="/profile.png" alt="IppeiShimizu" width={48} height={48} />
          <div className="ml-4">
            <p className="text-base font-bold">Ippei Shimize</p>
            <p className="text-xs font-medium text-zinc-500">
              Yamanashi / Web Coder
            </p>
          </div>
        </div>
        <nav className="mt-24">
          <ul className="grid grid-cols-4 gap-8">
            {NAV_ITEMS.map((item) => {
              return (
                <li key={item.href} className={`${item.class} rounded-3xl`}>
                  <Link href={item.href} prefetch={false}>
                    <a className="text-center block pt-7 pb-6 px-2">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={80}
                        height={80}
                      />
                      <h2 className="text-lg font-bold mt-1">{item.label}</h2>
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};
