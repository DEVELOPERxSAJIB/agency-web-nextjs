"use client";
import React, { useState } from "react";
import Style from "./links.module.css";
import NavLinks from "./navLinks/navLinks";

const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

const Links = () => {
  const [open, setOpen] = useState(false);

  // Temporary
  const session = true;
  const isAdmin = true;

  return (
    <>
      <div className={Style.container}>
        <div className={Style.links}>
          {links.map((link) => (
            <NavLinks item={link} key={link.title} />
          ))}

          {session ? (
            <>
              {isAdmin && (
                <NavLinks item={{ title: "Admin", path: "/admin" }} />
              )}
              <button className={Style.logout}>Log Out</button>
            </>
          ) : (
            <NavLinks item={{ title: "Login", path: "/login" }} />
          )}
        </div>

        <div>
          <button
            className={Style.menuButton}
            onClick={() => setOpen((prev) => !prev)}
          >
            Menu
          </button>
        </div>
        {open && (
          <div className={Style.mobileLinks}>
            {links.map((link) => (
              <NavLinks item={link} key={link.title} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Links;
