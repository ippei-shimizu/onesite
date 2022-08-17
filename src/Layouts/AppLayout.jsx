import { Header } from "./Header";

export const AppLayout = (props) => {
  return (
    <>
      <Header />
      <div className="w-11/12 max-w-7xl mx-auto">
      {props.children}
      </div>
    </>
  );
};
