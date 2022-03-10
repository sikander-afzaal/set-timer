import React from "react";
import styles from "./Navbar.module.css";
import logo1 from "assets/images/logo1.png";
import logo2 from "assets/images/logo-2.png";
import { Link } from "react-router-dom";
import { BsDiscord, BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import useMediaQuery from "hooks/useMediaQuery";
import { HiOutlineLink } from "react-icons/hi";
import { Fade } from "react-awesome-reveal";
import { FaBabyCarriage } from "react-icons/fa";

function Navbar() {
  const isBellow1000px = useMediaQuery("(max-width : 1000px)");
  const isBellow700px = useMediaQuery("(max-width : 700px)");

  return (
    <div>
      <div className="container-wrapper">
        <div className={styles.navbar}>
          <div className={styles.Left}>
            <Link to="/" className={styles.logo}>
              <Fade
                direction="up"
                delay={400}
                duration={400}
                triggerOnce={true}
                cascade={true}
                className="blend-mode-screen"
              >
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
              </Fade>
            </Link>
          </div>
          <div className={styles.Right}>
            <Fade
              direction="up"
              delay={400}
              duration={400}
              triggerOnce={true}
              cascade={true}
            >
              <a
                href="https://twitter.com/EmpyrealsNFT"
                rel="noreferrer"
                target="_blank"
              >
                <BsTwitter size={isBellow1000px ? 24 : 41} />
              </a>
              <a
                href="https://discord.gg/myKgHJ84QJ"
                rel="noreferrer"
                target="_blank"
              >
                <BsDiscord size={isBellow1000px ? 24 : 40} />
              </a>
              <a
                href="https://www.instagram.com/empyrealsnft/"
                rel="noreferrer"
                target="_blank"
              >
                <AiFillInstagram size={isBellow1000px ? 24 : 43} />
              </a>

              <Link
                to="/mint"
                className={`${
                  styles.connectBtn
                } yellow-btn white uppercase weight-7 text-center ${
                  isBellow1000px
                    ? isBellow700px
                      ? "fs-10px"
                      : "fs-12px"
                    : "fs-16px"
                } pointer`}
                id="navBar__walletBtn"
              >
                Mint Now
                {/* {isBellow700px ? <FaBabyCarriage size={20} /> : "Mint Now"} */}
              </Link>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
