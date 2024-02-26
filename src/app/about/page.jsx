"use client";
import React from "react";
import styles from "./about.module.css";
import Image from "next/image";
import CountUp from "react-countup";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Agency</h2>
        <h1 className={styles.title}>
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className={styles.desc}>
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precission We’re world’s Our
          Special Team best consulting & finance solution provider. Wide range
          of web and software development services.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>
              <CountUp end={10} /> K+
            </h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>
              <CountUp end={10} /> K+
            </h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>
              <CountUp start={-10.039} duration={2.75} end={12} /> K+
            </h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="About Image" fill className={styles.img} />
      </div>
    </div>
  );
};

export default AboutPage;
