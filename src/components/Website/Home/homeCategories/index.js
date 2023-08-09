import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import pix1 from "../../../../assets/images/cat1.webp";
import pix2 from "../../../../assets/images/cat2.webp";
import pix3 from "../../../../assets/images/cat3.webp";

import "./styles.scss";

SwiperCore.use([Navigation, Autoplay]);

const HomeCategories = () => {
  return (
    <section className={`home-categories`}>
      <div className="wrapper">
        <div className={`featured-head`}>
          <h3>Categories</h3>
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
                <img src={pix1} alt="" />
                <div className={`category-item-info`}>
                  <h4>Men</h4>
                  <button className="btn-block btn-small">Shop Now</button>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={`category-item`}>
                <img src={pix2} alt="" />
                <div className={`category-item-info`}>
                  <h4>Men</h4>
                  <button className="btn-block btn-small">Shop Now</button>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={`category-item`}>
                <img src={pix3} alt="" />
                <div className={`category-item-info`}>
                  <h4>Men</h4>
                  <button className="btn-block btn-small">Shop Now</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={`category-item`}>
                <img src={pix1} alt="" />
                <div className={`category-item-info`}>
                  <h4>Men</h4>
                  <button className="btn-block btn-small">Shop Now</button>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={`category-item`}>
                <img src={pix2} alt="" />
                <div className={`category-item-info`}>
                  <h4>Men</h4>
                  <button className="btn-block btn-small">Shop Now</button>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={`category-item`}>
                <img src={pix1} alt="" />
                <div className={`category-item-info`}>
                  <h4>Men</h4>
                  <button className="btn-block btn-small">Shop Now</button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* <div className={`categories-wrapper`}>
          <div className={`category-item`}>
            <div className={`category-item-info`}>
              <h4>Men</h4>
              <button className="btn-block btn-small">Shop Now</button>
            </div>
          </div>
          <div className={`category-item`}>
            <div className={`category-item-info`}>
              <h4>Women</h4>
              <button className="btn-block btn-small">Shop Now</button>
            </div>
          </div>
          <div className={`category-item`}>
            <div className={`category-item-info`}>
              <h4>hats</h4>
              <button className="btn-block btn-small">Shop Now</button>
            </div>
          </div>
          <div className={`category-item`}>
            <div className={`category-item-info`}>
              <h4>Unisex</h4>
              <button className="btn-block btn-small">Shop Now</button>
            </div>
          </div>
          <div className={`category-item`}>
            <div className={`category-item-info`}>
              <h4>hats</h4>
              <button className="btn-block btn-small">Shop Now</button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default HomeCategories;
