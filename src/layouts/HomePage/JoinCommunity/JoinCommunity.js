import React from "react";
import styles from "./JoinCommunity.module.css";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import joinBanner from "assets/images/joinBanner.png";
import Title from "components/Title/Title";
import useMediaQuery from "hooks/useMediaQuery";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

function JoinCommunity() {
  const isBellow760px = useMediaQuery("(max-width : 760px)");
  const FadeFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;
  const FadeFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

  return (
    <div>
      <div className="container-wrapper ">
        <div className={styles.section}>
          <div className={styles.left}>
            <Reveal
              keyframes={FadeFromLeft}
              cascade={true}
              triggerOnce={true}
              delay={500}
              duration={700}
            >
              <div className={isBellow760px ? "mb-20px" : "mb-35px"}>
                <Title title="Join the community" />
              </div>

              <p
                className={`fs-32px white weight-5 lh-1_4 ${
                  isBellow760px ? "mb-25px" : "mb-40px"
                } `}
              >
                Join us to get the news as soon as possible and follow for our
                latest announcement. Join the{" "}
                <a href="#" className="text-yellow-gradient weight-7">
                  #Empfam now.
                </a>
              </p>

              {/* <div className={styles.socialLinks}>
                <a
                  href="https://www.instagram.com/empyrealsnft/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillInstagram size={isBellow760px ? 50 : 80} />
                </a>
                <a
                  href="https://discord.gg/myKgHJ84QJ"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaDiscord size={isBellow760px ? 50 : 80} />
                </a>
                <a
                  href="https://twitter.com/EmpyrealsNFT"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsTwitter size={isBellow760px ? 42 : 72} />
                </a>
              </div> */}
            </Reveal>
          </div>
          <div className={styles.right}>
            <Reveal
              keyframes={FadeFromRight}
              triggerOnce={true}
              delay={500}
              duration={700}
            >
              <img src={joinBanner} alt="" />
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinCommunity;
