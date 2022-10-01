import Head from "next/head";
import { AppLayout } from "../Layouts/AppLayout";
import { SWRConfig } from "swr";
import "../styles/globals.css";
import DarkModeProvider from "src/hooks/DarkModeContext";

const fetcher = async (...args) => {
  const res = await fetch(...args);
  const json = await res.json();
  return json;
};

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SWRConfig value={{ fetcher }}>
        <DarkModeProvider>
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </DarkModeProvider>
      </SWRConfig>
    </>
  );
};

export default MyApp;
