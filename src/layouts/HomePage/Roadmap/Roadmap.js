import RoadmapCard from "components/Cards/RoadmapCard/RoadmapCard";
import React from "react";
import styles from "./Roadmap.module.css";
import roadmap_img_1 from "assets/images/roadmap_img_1.png";
import roadmap_img_2 from "assets/images/roadmap_img_2.png";
import Title from "components/Title/Title";
import { Fade } from "react-awesome-reveal";
import GIF from "assets/images/GIF.gif";

function Roadmap() {
  return (
    <div>
      <div className="container-wrapper">
        <div className="mb-60px">
          <Fade direction="down" triggerOnce={true}>
            <Title title="EMPYREALS NFT ROADMAP" className="text-center" />
          </Fade>
        </div>

        <div className={styles.cards}>
          <div className={styles.left}>
            <RoadmapCard
              title="PRE-MINT"
              points={[
                { point: "Website and Contract Building" },
                { point: "Community building and Engagement" },
                { point: "Community Games, Contests and Challenges" },
                { point: "Partnerships and Collabs with other projects" },
                { point: "The Council of Elders will be chosen." },
              ]}
            />

            <RoadmapCard
              title="POST-MINT"
              percentage={10}
              points={[
                {
                  point:
                    "Community Wallet of 3 ETH will be created to support the Empyreals project",
                },
                {
                  point:
                    "Our believers of the project are most important to us and so we will reward a select few holders with gifts like iPhone 13, PS5 and Cash Prizes worth 1 ETH in total.",
                },
              ]}
            />
            <RoadmapCard
              title="Stage 2"
              percentage={25}
              points={[
                {
                  point:
                    "First 10% NFT holders to mint will be part owner of an Exclusive E-Merch Store which will be a high street fashion line with very little investment and high returns. Also, since one of the founders already has a rich experience in the merchandise sector and has contacts with major manufacturers it’ll be a plus. Thus, playing a part in assuring the success of Empyreals as a brand.",
                },
                {
                  point:
                    "Posters will be given as Souvenir to the first 100 holders. ",
                },
                {
                  point:
                    "Creation of The Empyreals filter on leading social media platforms like Tiktok and Instagram representing each Faction to boost our social media presence. ",
                },

                {
                  point:
                    "Oculus Quest 2 and I phone 13 worth 1 ETH will be given to 6 holders minting more than 2 tokens.",
                },
              ]}
            />
            <RoadmapCard
              title="Stage 3"
              percentage={50}
              points={[
                {
                  point:
                    "EMPYREALS will do their bit for the world and accomplish their dream of changing the world and Donate 10 ETH to a Charity of Community’s choice.",
                },
                {
                  point:
                    "We’ll start a Empyreals Venture Capital Fund wherein financial aid worth $ 66,666 will be provided to the Entrepreneurs and Artists of our community. Members are going to choose the projects we are going to invest in through the DAO system on majority basis also token holders will have the option to buy blue chip tokens and other crypto assets as a community.",
                },
                {
                  point:
                    "The first 1000 holders will receive a surprise Golden and Silver weapon NFT airdropped to their wallets which will also be an exclusive whitelist access to our Second Season NFT Drop releasing in Q 1 2022.                         ",
                },
              ]}
            />
            <RoadmapCard
              title="Stage 4"
              percentage={75}
              points={[
                {
                  point:
                    "Prizes worth $66,666 including 1 Tesla Model 3 and 6 Oculus Quest 2, 6 iPhone 13, will be distributed to a select few Empyreals.",
                },
                {
                  point:
                    "25 ETH will be added to the Community Wallet for price stabilization of floor price on Opensea and purchase of land on Sandbox, Decentraland or both after discussing with the community.",
                },
              ]}
            />
            <RoadmapCard
              title="Stage 5"
              percentage={100}
              points={[
                {
                  point:
                    "The Empyreals Project will be extended to Decentraland which will be the 'Spire of Empyros' - our HQ and Club.",
                },
                {
                  point:
                    "3D EMPYREALS airdropped to all the holders of 6666 2D EMPYREALS by Q1 2022",
                },
                {
                  point:
                    "Private Events, Educational Seminars, Parties and Meetups will be held both online and offline where Industry experts and entrepreneurs, Investors, Innovators from different walks of life like Real Estate, Crypto, NFT, Stocks, Startups come together to provide the networking experience of a lifetime.",
                },
                {
                  point:
                    "We are going to launch the $EPEX token with a limited supply which will be used as our in-game currency to provide utility and governance to our EMPYREALS token holders.",
                },
                {
                  point:
                    "Big Reveal of The Next Season of our EMPYREALS Project in Q1 2022.",
                },

                {
                  point:
                    "Game Finalization and Game Roadmap will be initiated after taking community’s opinion and hiring the best gaming experts for R&D.",
                },
                {
                  point:
                    "In the end the vision is to create utility in ‘EMPVERSE’ for us and other projects by creating sources of wealth with physical and digital options and investment opportunities for our community. Hence, we’ll be giving 10% of the Royalties back to the holders. ",
                },
                {
                  point:
                    "Further we know that 95% of projects in the NFT space will cease to exist since it’s a wild west out there so we’ll try our best to stay relevant and deliver our promises to give the best to the community.",
                },
              ]}
            />
          </div>
          <div className={styles.right}>
            <div className={styles.content}>
              <img src={GIF} className="w-full" alt="" />
              <img src={roadmap_img_2} className="w-full" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
