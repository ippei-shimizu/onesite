import { Header } from "./Header";

export const AppLayout = (props) => {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
};
