import Image from "next/image";
import Link from "next/link";

export const SubCategoryItem = (value = { props: subCategory }) => {
  return (
    <>
      <section className="w-11/12 max-w-7xl mx-auto">
        <h2 className="mt-20 mb-6 text-3xl font-bold">Category</h2>
        <ul className="grid grid-cols-4 gap-5 mb-16">
          {value.value.map((sub) => {
            return (
              <li
                key={sub.id}
                className="py-3 px-4 rounded border border-slate-300 bg-white"
              >
                <Link href={`/subcategory/${sub.id}`} prefetch={false}>
                  <a className="flex items-center">
                    <Image
                      src={sub.icon.url}
                      alt={sub.alt}
                      width={52}
                      height={52}
                    />
                    <h3 className="ml-2 text-base font-medium">{sub.name}</h3>
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
