import React from "react";
import styles from "./styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import testimonialPix from "../../../../assets/images/reveiw-woman.png";

SwiperCore.use([Navigation, Autoplay]);

const reviews = () => {
  return (
    <section className={styles.reviews}>
      <div className={styles.wrapper}>
        <h6>WHY PEOPLE LOVE US</h6>
        <h4>Testimonials from real clients</h4>
        <div className={styles.reviewsCarousel}>
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            // autoHeight={true}
            className="swiper-wrapper"
            navigation
            loop
            speed={3000}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <div className={styles.reviewContent}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                  urna, ac vitae dui, sit semper orci eu tincidunt. Sagittis
                  viverra malesuada nibh diam nulla senectus justo, donec etiam.
                  Donec hendrerit consequat.
                </p>

                <div className={styles.reviewPerson}>
                  <div className={styles.left}>
                    <img alt="" src={testimonialPix} />
                  </div>

                  <div className={styles.right}>
                    <span>Kelly Hudson</span>
                    <span>ICT Engineer - Rowley Laws</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={styles.reviewContent}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                  urna, ac vitae dui, sit semper orci eu tincidunt. Sagittis
                  viverra malesuada nibh diam nulla senectus justo, donec etiam.
                  Donec hendrerit consequat.
                </p>

                <div className={styles.reviewPerson}>
                  <div className={styles.left}>
                    <img alt="" src={testimonialPix} />
                  </div>

                  <div className={styles.right}>
                    <span>Kelly Hudson</span>
                    <span>ICT Engineer - Rowley Laws</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={styles.reviewContent}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
                  urna, ac vitae dui, sit semper orci eu tincidunt. Sagittis
                  viverra malesuada nibh diam nulla senectus justo, donec etiam.
                  Donec hendrerit consequat.
                </p>

                <div className={styles.reviewPerson}>
                  <div className={styles.left}>
                    <img alt="" src={testimonialPix} />
                  </div>

                  <div className={styles.right}>
                    <span>Kelly Hudson</span>
                    <span>ICT Engineer - Rowley Laws</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default reviews;
