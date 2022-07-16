import Header from "../components/Header/Header";

type PageLayoutProps = {
  children?: React.ReactNode;
};
export const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="">
      <Header />
      <div>{children}</div>
    </div>
  );
};
