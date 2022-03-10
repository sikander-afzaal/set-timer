import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore, { Navigation, EffectCoverflow, Autoplay } from "swiper";
import useMediaQuery from "hooks/useMediaQuery";
import Title from "components/Title/Title";
import { Fade } from "react-awesome-reveal";

import collectionPerson1 from "assets/images/collection/1.jpg";
import collectionPerson2 from "assets/images/collection/2.jpg";
import collectionPerson3 from "assets/images/collection/3.jpg";
import collectionPerson4 from "assets/images/collection/4.jpg";
import collectionPerson5 from "assets/images/collection/5.jpg";
import collectionPerson6 from "assets/images/collection/6.jpg";
import collectionPerson7 from "assets/images/collection/7.jpg";
import collectionPerson8 from "assets/images/collection/8.jpg";
import collectionPerson9 from "assets/images/collection/9.jpg";
import collectionPerson10 from "assets/images/collection/10.jpg";
import collectionPerson11 from "assets/images/collection/11.jpg";
import collectionPerson12 from "assets/images/collection/12.jpg";
import collectionPerson13 from "assets/images/collection/13.jpg";
import collectionPerson14 from "assets/images/collection/14.jpg";
SwiperCore.use([Navigation, EffectCoverflow, Autoplay]);

function Collection() {
  let navigationPrevRef = React.useRef(null);
  let navigationNextRef = React.useRef(null);
  const isBellow500px = useMediaQuery("(max-width : 500px)");

  return (
    <div>
      <div className="container-wrapper">
        <div className="mb-50px">
          <Fade direction="up" delay={300}>
            <Title title="Collection" className="text-center" />
          </Fade>
        </div>
      </div>

      <Fade triggerOnce={true} delay={300}>
        <Swiper
          slidesPerView={3}
          spaceBetween={60}
          effect={"coverflow"}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          centeredSlides={true}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 1,
          }}
          onSwiper={(swiper) => {
            setTimeout(() => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
            });
          }}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          className="collection-slider"
          style={{ padding: isBellow500px ? "0 10%" : "" }}
          breakpoints={{
            800: {
              spaceBetween: 60,
              slidesPerView: 3,
            },
            600: {
              spaceBetween: 30,
              slidesPerView: 3,
            },
            500: {
              spaceBetween: 40,
              slidesPerView: 2,
            },
            200: {
              spaceBetween: 50,
              slidesPerView: 1,
            },
          }}
        >
          <SwiperSlide>
            <img src={collectionPerson1} className="w-full" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={collectionPerson2} className="w-full" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={collectionPerson3} className="w-full" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={collectionPerson4} className="w-full" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={collectionPerson5} className="w-full" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={collectionPerson6} className="w-full" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={collectionPerson7} className="w-full" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={collectionPerson8} className="w-full" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={collectionPerson9} className="w-full" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={collectionPerson10} className="w-full" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={collectionPerson11} className="w-full" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={collectionPerson12} className="w-full" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={collectionPerson13} className="w-full" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={collectionPerson14} className="w-full" alt="" />
          </SwiperSlide>
        </Swiper>
      </Fade>
    </div>
  );
}

export default Collection;
