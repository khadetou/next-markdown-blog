import Meta from "./Meta";
import Header from "./Header";
const Layout = ({ children }) => {
  return (
    <>
      <Meta title="Dev Blog" />
      <Header />
      <main className="container">{children}</main>
    </>
  );
};

export default Layout;
