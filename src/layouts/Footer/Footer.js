import React from "react";
import styles from "./Footer.module.css";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import logo1 from "assets/images/logo1.png";
import logo2 from "assets/images/logo-2.png";
import { Link } from "react-router-dom";
import useMediaQuery from "hooks/useMediaQuery";
import { Fade } from "react-awesome-reveal";

function Footer() {
  const isBellow500px = useMediaQuery("(max-width : 500px)");

  return (
    <div>
      <div className="container-wrapper">
        <Fade
          direction="down"
          triggerOnce={true}
          cascade={true}
          delay={500}
          duration={500}
          className="blend-mode-screen"
        >
          <Link to="/" className={`${styles.logo} mb-25px `}>
            <img
              src={logo1}
              className={`${styles.logo1} blend-mode-screen`}
              alt=""
            />
            <img
              src={logo2}
              className={`${styles.logo2} blend-mode-screen`}
              alt=""
            />
          </Link>
        </Fade>

        <div className="text-center mb-30px">
          <Fade
            direction="down"
            triggerOnce={true}
            cascade={true}
            delay={200}
            duration={500}
          >
            <Link
              to="/terms-and-conditions"
              className={`${
                isBellow500px ? "fs-20px" : "fs-24px"
              }  weight-4  white `}
            >
              Terms & conditions
            </Link>
          </Fade>
        </div>

        <div className={`${styles.socialLinks} mb-30px`}>
          <Fade
            direction="up"
            triggerOnce={true}
            cascade={true}
            delay={200}
            duration={500}
          >
            <a
              href="https://www.instagram.com/empyrealsnft/"
              rel="noreferrer"
              target="_blank"
            >
              <AiFillInstagram size={isBellow500px ? 40 : 60} />
            </a>
            <a
              href="https://discord.gg/myKgHJ84QJ"
              target="_blank"
              rel="noreferrer"
            >
              <FaDiscord size={isBellow500px ? 40 : 60} />
            </a>
            <a
              href="https://twitter.com/EmpyrealsNFT"
              target="_blank"
              rel="noreferrer"
            >
              <BsTwitter size={isBellow500px ? 32 : 52} />
            </a>
          </Fade>
        </div>

        <Fade
          direction="down"
          triggerOnce={true}
          cascade={true}
          delay={200}
          duration={500}
        >
          <p
            className={`${
              isBellow500px ? "fs-12px" : "fs-14px"
            } weight-4 text-center white`}
          >
            Copyright © 2022, All rights reserved.
          </p>
        </Fade>
      </div>
    </div>
  );
}

export default Footer;
