import Image from "next/image";
import Link from "next/link";

const NAV_ITEMS = [
  {
    href: "/categories/front-end",
    label: "Front End",
    src: "/frontend.svg",
    src: "/frontend.svg",
    alt: "Front End",
    class:
      "bg-gradient-to-tl from-nav01-blue-t via-nav01-blue-v to-nav01-blue-b",
  },
  {
    href: "/categories/web-production",
    label: "WebProduction",
    src: "/webproduction.svg",
    alt: "Web Production",
    class:
      "bg-gradient-to-tl from-nav02-blue-t via-nav02-blue-v to-nav02-blue-b",
  },
  {
    href: "/categories/design",
    label: "Design",
    src: "/design.svg",
    alt: "Design",
    class:
      "bg-gradient-to-tl from-nav03-blue-t via-nav03-blue-v to-nav03-blue-b",
  },
  {
    href: "/categories/life-style",
    label: "Life Style",
    src: "/lifestyle.svg",
    alt: "Life Style",
    class:
      "bg-gradient-to-tl from-nav04-blue-t via-nav04-blue-v to-nav04-blue-b",
  },
];

export const Header = () => {
  return (
    <header className="w-full mt-12">
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
        <div className="flex items-center mt-6">
          <Image src="/profile.png" alt="IppeiShimizu" width={52} height={52} />
          <div className="ml-4">
            <p className="text-lg font-bold">Ippei</p>
            <p className="text-sm font-medium text-zinc-500">
              Yamanashi / Web Coder
            </p>
          </div>
        </div>
        <nav className="mt-16">
          <ul className="grid grid-cols-4 gap-6">
            {NAV_ITEMS.map((item) => {
              return (
                <li key={item.href} className={`${item.class} rounded-3xl`}>
                  <Link href={item.href} prefetch={false}>
                    <a className="text-center block pt-8 pb-7 px-2">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={72}
                        height={72}
                      />
                      <h2 className="text-lg tracking-wide font-bold mt-2">{item.label}</h2>
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
