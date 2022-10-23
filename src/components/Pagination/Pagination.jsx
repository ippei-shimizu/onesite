import Link from "next/link";

export const Pagination = ({ totalCount }) => {
  const PER_PAGE = 5;

  const range = (start, end) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  return (
    <ul className="w-11/12 max-w-3xl mx-auto flex justify-center space-x-5 mt-6">
      {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
        <li key={index} className="text-center">
          <Link href={`/latest/page/${number}`}>
            <a className="text-sky-900 block w-10 h-10 bg-sky-200 rounded-md leading-10">{number}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};
