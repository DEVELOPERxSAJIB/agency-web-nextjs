import Link from "next/link";
import Links from "./Links/Links";
import Style from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={Style.container}>
      <Link href={"/"}>
        <div className={Style.logo}>TechLab</div>
      </Link>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
