import Link from "next/link";
import styles from "src/components/Category/Category.module.css";
import FormContent from "./FormContent";

export const ContactContent = () => {
  return (
    <>
      <section className="w-11/12 max-w-3xl mx-auto mt-6">
        <h1
          className={`font-bold tracking-wide text-center ${styles.title} dark:text-slate-100`}
        >
          Contact
        </h1>
        <nav>
          <ul className="flex justify-center text-sky-500">
            <li>
              <Link href={`/`} prefetch={false}>
                <a>
                  Home
                  <span className="mx-2 text-stone-900 dark:text-sky-500">
                    /
                  </span>
                </a>
              </Link>
            </li>
            <li>Contact</li>
          </ul>
        </nav>
        <FormContent />
      </section>
    </>
  );
};

export default ContactContent;
