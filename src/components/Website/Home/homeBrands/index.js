import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";

import "./styles.scss";

SwiperCore.use([Navigation, Autoplay]);

const HomeBrands = () => {
  return (
    <section className={`home-brands`}>
      <div className="wrapper">
        <div className={`featured-head`}>
          <h3>Shop by Brands</h3>
        </div>
        <div className={`cat-carousel`}>
          <Swiper
            spaceBetween={20}
            slidesPerView={3}
            // autoHeight={true}
            // centeredSlides={true}
            className="swiper-wrapper"
            navigation
            // loop
            speed={3000}
            // autoplay={{
            //   delay: 2500,
            //   disableOnInteraction: false,
            // }}
          >
            <SwiperSlide>
              <div className={`category-item`}>
                <div className={`category-item-info`}>
                  <h4>Men</h4>
                  <button
                    className="btn-block btn-small"
                    style={{ border: "solid 1px #000" }}
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={`category-item`}>
                <div className={`category-item-info`}>
                  <h4>Men</h4>
                  <button
                    className="btn-block btn-small"
                    style={{ border: "solid 1px #000" }}
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={`category-item`}>
                <div className={`category-item-info`}>
                  <h4>Men</h4>
                  <button
                    className="btn-block btn-small"
                    style={{ border: "solid 1px #000" }}
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`category-item`}>
                <div className={`category-item-info`}>
                  <h4>Men</h4>
                  <button
                    className="btn-block btn-small"
                    style={{ border: "solid 1px #000" }}
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={`category-item`}>
                <div className={`category-item-info`}>
                  <h4>Men</h4>
                  <button
                    className="btn-block btn-small"
                    style={{ border: "solid 1px #000" }}
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={`category-item`}>
                <div className={`category-item-info`}>
                  <h4>Men</h4>
                  <button
                    className="btn-block btn-small"
                    style={{ border: "solid 1px #000" }}
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default HomeBrands;
