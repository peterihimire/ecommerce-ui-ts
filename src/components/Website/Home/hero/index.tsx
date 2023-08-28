import React, { useCallback, useState, useEffect, useRef } from "react";
// import heroImg from "../../../../assets/images/software-landing-2.png";
// import heroImg from "../../../../assets/images/product7.png";
// import heroImg2 from "../../../../assets/images/product8.png";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Pagination,
  Autoplay,
  Navigation,
  EffectFlip,
  EffectCoverflow,
  EffectFade,
} from "swiper";

import styles from "./styles.module.scss";

SwiperCore.use([Pagination, Navigation]);
SwiperCore.use([Autoplay, EffectFlip, EffectCoverflow, EffectFade]);

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
    <section className={`${styles.hero} hero-section`}>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        pagination={pagination}
        className={`${styles.wrapper}`}
        loop
        autoHeight={true}
        centeredSlides={true}
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        effect="fade"
      >
        <SwiperSlide>
          <div className={styles.slideItem1}>
            <div className={"wrapper"}>
              <div className={styles.container}>
                <div className={styles.center}>
                  <h1>
                    Classic shoes for your fashion <span>sense</span>
                  </h1>

                  <p>
                    Celebrated delightful an especially increasing instrument
                    am. Indulgence contrasted sufficient to unpleasant in in
                  </p>

                  <div className={styles.getStarted}>
                    <button className="btn-primary  btn-medium indicator">
                      Shop now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.slideItem2}>
            <div className={"wrapper"}>
              <div className={styles.container}>
                <div className={styles.center}>
                  <h1>
                    Runner shoes for a healthy <span>live</span>
                  </h1>

                  <p>
                    Celebrated delightful an especially increasing instrument
                    am. Indulgence contrasted sufficient to unpleasant in in
                  </p>

                  <div className={styles.getStarted}>
                    <button className="btn-primary  btn-medium indicator">
                      Shop now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      {/* <Accomplishment /> */}
    </section>
  );
};

export default Hero;
