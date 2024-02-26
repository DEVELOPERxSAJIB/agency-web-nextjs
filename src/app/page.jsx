"use client";
import Image from "next/image";
import style from "./home.module.css";

const HomePage = () => {
  return (
    <div className={style.containerrr}>
      <div className={style.textContainer}>
        <h1 className={style.title}>Creative Thoughts Agency.</h1>
        <p className={style.desc}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
          temporibus cum sit laborum facere pariatur culpa sapiente placeat,
          nihil iure.
        </p>
        <div className={style.buttons}>
          <button className={style.button}>Learn More</button>
          <button className={style.button}>Contact</button>
        </div>
        <div className={style.brands}>
          <Image src={"/brands.png"} alt="logo" fill />
        </div>
      </div>

      <div className={style.imgContainer}>
        <Image className={style.heroImg} src={"/hero.gif"} alt="hero" fill />
      </div>
    </div>
  );
};

export default HomePage;
