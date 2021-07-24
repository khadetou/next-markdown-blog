import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="container">
        <Link href="/" passHref>
          <h2 style={{ cursor: "pointer" }}>Dev BLog</h2>
        </Link>
      </div>
    </header>
  );
};

export default Header;
