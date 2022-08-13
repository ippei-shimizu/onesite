import { AppLayout } from "../Layouts/AppLayout";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <AppLayout>
        <Component {...pageProps} />;
      </AppLayout>
    </>
  );
};

export default MyApp;
