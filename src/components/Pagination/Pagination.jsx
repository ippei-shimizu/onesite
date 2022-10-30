import Link from "next/link";
import { LatestPostLimit } from "src/utils/const";

export const Pagination = ({ totalCount }) => {
  const PER_PAGE = LatestPostLimit;

  const range = (start, end) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  return (
    <ul className="w-11/12 max-w-3xl mx-auto flex justify-center space-x-4 mt-6">
      {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
        <li key={index} className="text-center">
          <Link href={`/latest/page/${number}`}>
            <a className="text-sm text-sky-900 block w-9 h-9 bg-sky-200 rounded-md leading-9 hover:opacity-90 transition-opacity duration-100 dark:bg-sky-700 dark:text-sky-100">{number}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};
