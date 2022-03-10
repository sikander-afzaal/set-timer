import Footer from "layouts/Footer/Footer";
import Collection from "layouts/HomePage/Collection/Collection";
import Hero from "layouts/HomePage/Hero/Hero";
import JoinCommunity from "layouts/HomePage/JoinCommunity/JoinCommunity";
import Roadmap from "layouts/HomePage/Roadmap/Roadmap";
import Story from "layouts/HomePage/Story/Story";
import Team from "layouts/HomePage/Team/Team";
import Navbar from "layouts/Navbar/Navbar";
import React, { useEffect } from "react";
import video from "assets/images/video.mp4";
import styles from "./HomePage.module.css";
import useIntersectionObserver from "hooks/useIntersectionObserver";
import CountdownTimer from "components/CountdownTimer/CountdownTimer";

function HomePage() {
  const vidRef = React.useRef();
  const ref = React.useRef();
  const onScreen = useIntersectionObserver(ref);

  useEffect(() => {
    if (onScreen) {
      vidRef.current.play();
    } else {
      vidRef.current.pause();
    }
  }, [onScreen]);

  return (
    <div>
      <Navbar />
      <div className="mb-100px">
        <Hero />
      </div>
      <div className="mb-100px">
        <CountdownTimer />
      </div>
      <div className="mb-100px">
        <Collection />
      </div>
      <div className="mb-100px">
        <Story />
      </div>
      <div className="mb-100px">
        <div className="container-wrapper" ref={ref}>
          <div className={styles.videoWrapper}>
            <video ref={vidRef} controls={true}>
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <div className="mb-100px">
        <Roadmap />
      </div>
      <div className="mb-100px">
        <Team />
      </div>
      <div className="bg-blue py-100px">
        <div className="mb-150px">
          <JoinCommunity />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
