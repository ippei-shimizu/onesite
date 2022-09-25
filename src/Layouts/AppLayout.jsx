import { Footer } from "./Footer";
import { Header } from "./Header";

export const AppLayout = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};
