'use client'
import Link from "next/link";
import style from "./navLinks.module.css";
import { usePathname } from "next/navigation";

const NavLinks = ({ item }) => {
  const pathName = usePathname();

  return (
    <Link
      className={`${style.container} ${pathName === item.path && style.active}`}
      href={item.path}
    >
      {item.title}
    </Link>
  );
};

export default NavLinks;
