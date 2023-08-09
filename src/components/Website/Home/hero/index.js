import React, { useCallback } from "react";
// import heroImg from "../../../../assets/images/software-landing-2.png";
import heroImg from "../../../../assets/images/product7.png";
import heroImg2 from "../../../../assets/images/product8.png";
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

import "./styles.scss";

SwiperCore.use([Pagination, Navigation]);
SwiperCore.use([Autoplay, EffectFlip, EffectCoverflow, EffectFade]);

const Hero = () => {
  const pagination = {
    el: ".custom-pag1",
    clickable: true,
    renderBullet: function (index, className) {
      // return '<span class="' + className + '">' + "</span>";
      return `<span class="'  ${className} '">  </span>`;
    },
  };
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      pagination={pagination}
      navigation={{
        nextEl: ".custom-next1",
        prevEl: ".custom-prev1",
      }}
      className={`container`}
      autoHeight={true}
      centeredSlides={true}
      speed={2000}
      autoplay={{
        delay: 7000,
        disableOnInteraction: false,
      }}
      effect="fade"
      // autoplay={true}
      // effect="flip"
      // effect='cube'
      // effect="cards"
      // effect={"coverflow"}
      // loop
    >
      <SwiperSlide>
        <section className={`hero-header`}>
          <div className="wrapper">
            <div className={`container`}>
              <div className={`left`}>
                <h1>
                  Homemade <br /> Fresh<span> BURGER</span>
                  100% Natural.
                </h1>

                <p>
                  Celebrated delightful an especially increasing instrument am.
                  Indulgence contrasted sufficient to unpleasant in in
                  insensible favourable.
                </p>

                <div className={`get-started`}>
                  <button className="btn-primary  btn-medium indicato">
                    Shop now
                  </button>
                </div>
              </div>
              <div className={`rightt`}>
                <img src={heroImg} alt="" />
              </div>
            </div>
          </div>
        </section>
      </SwiperSlide>

      <SwiperSlide>
        <section className={`hero-header-2`}>
          <div className="wrapper">
            <div className={`container`}>
              <div className={`left`}>
                <h1>
                  Sweet <br />
                  Fresh<span> BURGER</span>
                  100% Natural.
                </h1>

                <p>
                  Delicious burger an especially increasing instrument am.
                  Indulgence contrasted sufficient to unpleasant in in
                  insensible favourable.
                </p>

                <div className={`get-started`}>
                  <button className="btn-primary  btn-medium indicato">
                    Shop now
                  </button>
                </div>
              </div>
              <div className={`rightt`}>
                <img src={heroImg2} alt="" />
              </div>
            </div>
          </div>
        </section>
      </SwiperSlide>
    </Swiper>
  );
};

export default Hero;
