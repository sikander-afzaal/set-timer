import React from "react";
import styles from "./Hero.module.css";
import banner from "assets/images/banner.png";
import logo1 from "assets/images/logo1.png";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

function Hero() {
  const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-100px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
  return (
    <Reveal keyframes={customAnimation} triggerOnce={true}>
      <div className={styles.wrapper}>
        <img src={banner} className="w-full" alt="" />
        <img src={logo1} className={styles.logo} alt="" />
      </div>
    </Reveal>
  );
}

export default Hero;
