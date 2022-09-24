import { Link as ScrollLink } from "react-scroll";
import classes from "src/styles/Home.module.css";

export const TableOfContents = ({ toc }) => {
  return (
    <div className="bg-white py-6 px-8 rounded-3xl border-2 border-slate-200">
      <p className="TableOfContentsHead text-xl font-bold tracking-wide border-b-2 border-slate-700">
        Contents
      </p>
      <ul className="mt-4">
        {toc.map((data) => (
          <li key={data.id}>
            <ScrollLink to={data.id} smooth offset={-60} href={data.id}>
              <p className={`cursor-pointer text-sm font-bold text-slate-500 mb-2 duration-100 ${classes.hoverOpacity}`}>
                {data.text}
              </p>
            </ScrollLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
