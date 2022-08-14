import Head from "next/head";
import { Suspense } from "react";
import { HomeFv } from "src/components/Home/HomeFv";

const Home = () => {
  return (
    <>
      <Head>
        <title>Onesite - フロントエンドの技術アウトプットブログ</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Suspense>
        <main>
          <HomeFv />
        </main>

        <footer></footer>
      </Suspense>
    </>
  );
};

export default Home;
