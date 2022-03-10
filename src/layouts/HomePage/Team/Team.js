import TeamMemberCard from "components/Cards/TeamMemberCard/TeamMemberCard";
import React from "react";
import styles from "./Team.module.css";

import teamMember1 from "assets/images/teamMember1.png";
import teamMember2 from "assets/images/teamMember2.png";
import teamMember3 from "assets/images/teamMember3.png";
import teamMember4 from "assets/images/teamMember4.png";
import teamMember5 from "assets/images/teamMember5.png";
import teamMember6 from "assets/images/teamMember6.png";
import teamMember7 from "assets/images/teamMember7.png";
import teamMember8 from "assets/images/teamMember8.png";
import teamMember9 from "assets/images/teamMember9.jpg";
import teamMember10 from "assets/images/teamMember10.jpg";
import teamMember11 from "assets/images/teamMember11.jpg";
import teamMember12 from "assets/images/teamMember12.jpg";
import teamMember13 from "assets/images/teamMember13.jpg";
import { BsTwitter } from "react-icons/bs";
import Title from "components/Title/Title";
import { Fade } from "react-awesome-reveal";
import useMediaQuery from "hooks/useMediaQuery";

function Team() {
  const isBellow500px = useMediaQuery("(max-width : 400px)");

  return (
    <div>
      <div className="container-wrapper">
        <div className="mb-45px">
          <Fade direction="up" triggerOnce={true} delay={500}>
            <Title title="Our Team" className="text-center" />
          </Fade>
        </div>

        <div className={styles.cards}>
          <TeamMemberCard
            img={teamMember1}
            name="Zavix        "
            designation="Founder"
            links={[
              {
                icon: <BsTwitter size={30} />,
                link: "https://mobile.twitter.com/zavix_eth",
              },
            ]}
          />
          <TeamMemberCard
            img={teamMember2}
            name="Alyra "
            designation="Founder"
            links={[
              {
                icon: <BsTwitter size={30} />,
                link: "https://twitter.com/alyra_eth?t=Q1nGd7r0NmSSa1Mz0jdbmg&s=08",
              },
            ]}
          />
          <TeamMemberCard
            img={teamMember3}
            name="Lockhart"
            designation="Artist"
          />
          <TeamMemberCard
            img={teamMember4}
            name="Greenspider"
            designation="Community Manager"
            titleFontSize={isBellow500px ? "17px" : ""}
          />
          <TeamMemberCard
            img={teamMember5}
            name="Kamlu     "
            designation="Collab manager"
          />
          {/* <TeamMemberCard
            img={teamMember6}
            name="Kenko"
            designation="Discord Moderator"
          /> */}
          {/* <TeamMemberCard
            img={teamMember6}
            name="Adonis"
            designation="Moderator"
          /> */}
          <TeamMemberCard
            img={teamMember7}
            name="Insane"
            designation="Moderator"
          />
          <TeamMemberCard
            img={teamMember8}
            name="Matsev"
            designation="Blockchain dev"
          />
          <TeamMemberCard
            img={teamMember9}
            name="Zaifat"
            designation="Website dev"
          />
          <TeamMemberCard
            img={teamMember10}
            name="Alpha"
            designation="Discord Admin"
          />

          <TeamMemberCard
            img={teamMember11}
            name="Rukawa"
            designation="Moderator"
          />
          <TeamMemberCard
            img={teamMember12}
            name="Smy"
            designation="Moderator"
          />
          <TeamMemberCard
            img={teamMember13}
            name="Cathy"
            designation="Moderator"
          />
        </div>
      </div>
    </div>
  );
}

export default Team;
