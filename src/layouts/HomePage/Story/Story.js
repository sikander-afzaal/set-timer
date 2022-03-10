import React from "react";
import styles from "./Story.module.css";
import { BsDiscord } from "react-icons/bs";
import daimonds from "assets/images/daimonds.png";
import useMediaQuery from "hooks/useMediaQuery";
import Title from "components/Title/Title";
import { Fade } from "react-awesome-reveal";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

function Story() {
  const isBellow760px = useMediaQuery("(max-width : 760px)");
  const isBellow400px = useMediaQuery("(max-width : 400px)");
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
      <div className="container-wrapper">
        <div className={styles.section}>
          <div className={styles.left}>
            <Reveal keyframes={FadeFromLeft} duration={700}>
              <div className={`${isBellow760px ? "mb-20px" : "mb-35px"} `}>
                <Title title="Origin Story" />
              </div>

              <p
                className={`${
                  isBellow760px
                    ? isBellow400px
                      ? "fs-14px"
                      : "fs-16px"
                    : "fs-22px"
                } weight-4 white lh-1_5 ${
                  isBellow760px ? "mb-25px" : "mb-45px"
                } `}
              >
                {" "}
                Nestled deep in the Metaverse was the world <br /> of Empyros
                ‘The Highest Heaven’ — a high-tech planet whose advanced
                technological and scientific achievements were known far and
                wide in the Metaverse. A part of Empyros’ success as a society
                was its small population of 6,666 Empyreals which allowed them
                to maximize the resources allocated to each citizen. It was a
                harmonious and prosperous society that was self-sufficient and
                untouched by evil and immoral practices. Until one day something
                appeared above the Spire of Empyros - A Wormhole.
                <br /> Join our discord to know more
              </p>

              <button className={`${styles.btn} yellow-btn pointer`}>
                <BsDiscord size={isBellow760px ? 24 : 34} />{" "}
                <span
                  className={`${
                    isBellow760px ? "fs-16px" : "fs-22px"
                  } black weight-7`}
                >
                  Join Discord
                </span>
              </button>
            </Reveal>
          </div>
          <div className={styles.right}>
            <Reveal keyframes={FadeFromRight} duration={700}>
              <img src={daimonds} alt="" />
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Story;
