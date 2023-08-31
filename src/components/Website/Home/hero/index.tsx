import React, { useCallback, useState, useEffect, useRef } from "react";
import heroImg from "../../../../assets/images/k-swiss-unsplash.jpeg";
// import heroImg from "../../../../assets/images/product7.png";
import heroImg2 from "../../../../assets/images/runner-sneaker-unsplash.jpeg";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Pagination,
  Autoplay,
  Navigation,
  EffectFlip,
  EffectCoverflow,
  EffectFade,
  Zoom,
} from "swiper";

import styles from "./styles.module.scss";
import { ZoomIn, ZoomOut } from "@mui/icons-material";

SwiperCore.use([Pagination, Navigation]);
SwiperCore.use([
  Autoplay,
  EffectFlip,
  EffectCoverflow,
  EffectFade,
  Zoom,
  ZoomIn,
  ZoomOut,
]);

// SwiperCore.use([Pagination, Navigation]);
// SwiperCore.use([Autoplay, EffectFlip, EffectCoverflow, EffectFade]);

const Hero: React.FC = () => {
  const pagination = {
    el: ".custom-pag1",
    clickable: true,
    renderBullet: function (index: any, className: any) {
      // return '<span class="' + className + '">' + "</span>";
      return `<span class="'  ${className} '">  </span>`;
    },
  };

  return (
    <section className={`${styles.hero}`}>
      <div className={`${styles.wrapper}`}>
        <div className={`${styles.sliderOne}`}>
          <div className={`${styles.sliderOneImg}`}></div>
        </div>
        <div className={`${styles.sliderTwo}`}>
          <div className={`${styles.sliderTwoImg}`}></div>
        </div>
        <div className={`${styles.sliderThree}`}>
          <div className={`${styles.sliderThreeImg}`}></div>
        </div>
        <div className={`${styles.sliderFour}`}>
          <div className={`${styles.sliderFourImg}`}></div>
        </div>
      </div>

      <div className={`${styles.floatingInfo}`}>
        <div className={styles.center}>
          <h1>Classic shoes for your fashion sense</h1>
          <p>
            Celebrated delightful an especially increasing instrument am.
            Indulgence contrasted sufficient to unpleasant in in
          </p>

          <div className={styles.getStarted}>
            <button className={`btn-primary  btn-medium ${styles.indicator}`}>
              Shop now
            </button>
          </div>
        </div>
      </div>

      {/* <Swiper
        spaceBetween={0}
        slidesPerView={1}
        pagination={pagination}
        className={`${styles.wrapper}`}
        loop
        autoHeight={true}
        centeredSlides={true}
        speed={500}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        // zoom-out={true}
        // zoom-in={true}
        // zoom={true}
        // onZoomChange={}
        // effect="fade"
      >
        <SwiperSlide>
          <div className={styles.slideItem}>
            <div className={`${styles.sliderImg}`}>
              <img src={heroImg} alt="" className={`${styles.img1}`} />
            </div>

            <div className={styles.container}>
              <div className={styles.center}>
                <h1>Classic shoes for your fashion sense</h1>

                <p>
                  Celebrated delightful an especially increasing instrument am.
                  Indulgence contrasted sufficient to unpleasant in in
                </p>

                <div className={styles.getStarted}>
                  <button
                    className={`btn-primary  btn-medium ${styles.indicator}`}
                  >
                    Shop now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slideItem}>
            <div className={`${styles.sliderImg}`}>
              <img src={heroImg2} alt="" className={`${styles.img2}`} />
            </div>
            <div className={styles.container}>
              <div className={styles.center}>
                <h1>Runner shoes for a healthy living</h1>

                <p>
                  Celebrated delightful an especially increasing instrument am.
                  Indulgence contrasted sufficient to unpleasant in in
                </p>

                <div className={styles.getStarted}>
                  <button
                    className={`btn-primary  btn-medium ${styles.indicator}`}
                  >
                    Shop now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper> */}
    </section>
  );
};

export default Hero;
