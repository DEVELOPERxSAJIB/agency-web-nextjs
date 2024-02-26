import React from "react";
import style from "./footer.module.css";

const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.logo}>TechLab</div>
      <div className={style.text}>All rights are reserved</div>
    </div>
  );
};

export default Footer;
