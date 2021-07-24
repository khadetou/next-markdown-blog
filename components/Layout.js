import Meta from "./Meta";
const Layout = ({ children }) => {
  return (
    <>
      <Meta title="Dev Blog" />
      <>{children}</>
    </>
  );
};

export default Layout;
