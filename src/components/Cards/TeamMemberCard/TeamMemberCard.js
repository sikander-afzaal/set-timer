import useMediaQuery from "hooks/useMediaQuery";
import React from "react";
import { Fade } from "react-awesome-reveal";
import styles from "./TeamMemberCard.module.css";

function TeamMemberCard({ img, name, designation, links, titleFontSize = "" }) {
  const isBellow500px = useMediaQuery("(max-width : 500px)");

  return (
    <div className={styles.card}>
      <Fade direction="up" delay={600} triggerOnce>
        <img src={img} alt="" />
        <h1
          className={`${
            isBellow500px ? "fs-22px" : "fs-30px"
          } weight-5 text-center text-yellow-gradient`}
          style={{ fontSize: titleFontSize }}
        >
          {name}
        </h1>
        <h2
          className={`${
            isBellow500px ? "fs-16px" : "fs-22px"
          } weight-4 text-center `}
        >
          {designation}
        </h2>

        <div className={styles.socialLinks}>
          {links &&
            links.map((data, index) => <a href={data.link}>{data.icon}</a>)}
        </div>
      </Fade>
    </div>
  );
}

export default TeamMemberCard;
