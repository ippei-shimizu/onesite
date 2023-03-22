import Head from "next/head";
import Link from "next/link";
import styles from "src/components/Category/Category.module.css";

export default function ContactForm() {
  return (
    <>
      <Head>
        <title>Thanks - お問い合わせありがとうございます</title>
        <meta
          name="description"
          content="山梨県でWebコーダーとしてWeb制作に携わっています。フロントエンド開発やWeb制作について学んだことをアウトプットしていきます。"
        />
      </Head>
      <section className="w-11/12 max-w-3xl mx-auto mt-6">
        <h1
          className={`font-bold tracking-wide text-center ${styles.title} dark:text-slate-100`}
        >
          Thanks
        </h1>
        <nav>
          <ul className="flex justify-center text-sky-500">
            <li>
              <Link href={`/`} prefetch={false}>
                <a>Back to Home</a>
              </Link>
            </li>
          </ul>
        </nav>
        <article
          className={`text-center py-9 px-8 mt-4 bg-gradient-to-tr from-post-bg-t to-post-bg-b rounded-3xl transition duration-100 dark:from-post-bg-t-dark dark:to-post-bg-b-dark md:px-5 md:py-6`}
        >
          <div>
            <p className="text-center leading-7 tracking-wider dark:text-slate-100">
              お問い合わせありがとうございました。
              <br />
              内容を確認次第、折り返しご連絡させていただきますので、今暫くお待ちくださいませ。
            </p>
          </div>
        </article>
      </section>
    </>
  );
}
