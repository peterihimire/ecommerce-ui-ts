import React from "react";
import ProductCard from "../../../shared/productcard";
import { products } from "../../../../data-list";
import heroImg from "../../../../assets/images/k-swiss-unsplash.jpeg";
// import heroImg from "../../../../assets/images/product7.png";
import testImg1 from "../../../../assets/images/cat1.webp";
import testImg2 from "../../../../assets/images/cat2.webp";
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

SwiperCore.use([Pagination, Navigation]);
SwiperCore.use([
  Autoplay,
  EffectFlip,
  EffectCoverflow,
  EffectFade,
  Zoom,
  // ZoomIn,
  // ZoomOut,
]);

// SwiperCore.use([Pagination, Navigation]);
// SwiperCore.use([Autoplay, EffectFlip, EffectCoverflow, EffectFade]);

const Testimonial: React.FC = () => {
  const pagination = {
    el: ".custom-pag",
    clickable: true,
    renderBullet: function (index: any, className: any) {
      // return '<span class="' + className + '">' + "</span>";
      return `<span class="'  ${className} '">  </span>`;
    },
  };
  return (
    <section className={`${styles.testimonial}`}>
      <div className={`${styles.wrapper} wrapper`}>
        <div className={`${styles.testimonialTitle}`}>
          <p>Testimonial</p>
          <h3>What they say.</h3>
        </div>

        <div className={`${styles.swiperSlider}`}>
          <Swiper
            breakpoints={{
              200: { slidesPerView: 1 },
              500: { slidesPerView: 1.5 },
              700: { slidesPerView: 2 },
              900: { slidesPerView: 3 },
              1200: { slidesPerView: 3 },
              2500: { slidesPerView: 3 },
            }}
            spaceBetween={50}
            slidesPerView={3}
            pagination={pagination}
            className={`${styles.wrapper}`}
            loop
            autoHeight={true}
            centeredSlides={true}
            speed={3000}
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
                <div className={`${styles.slideTxt}`}>
                  <p>
                    Lorem duis iaculis velit lorem feugiat interdum tortor
                    curabitur lectus. Ante lectus habitasse urna eu maecenas
                    integer consequat. A condimentum odio dolor semper ligula
                    commodo turpis ultrices aliquet fames sem.
                  </p>
                </div>
                <div className={styles.slideUser}>
                  <img
                    src={testImg2}
                    alt=""
                    className={`${styles.img2}`}
                    width="30px"
                  />
                  <div className={styles.center}>
                    <h5>Esther Mbah</h5>
                    <p>Twitter</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.slideItem}>
                <div className={`${styles.slideTxt}`}>
                  <p>
                    Lorem duis iaculis velit lorem feugiat interdum tortor
                    curabitur lectus. Ante lectus habitasse urna eu maecenas
                    integer consequat. A condimentum odio dolor semper ligula
                    commodo turpis ultrices aliquet fames sem.
                  </p>
                </div>
                <div className={styles.slideUser}>
                  <img
                    src={testImg2}
                    alt=""
                    className={`${styles.img2}`}
                    width="30px"
                  />
                  <div className={styles.center}>
                    <h5>Peter Ihimire</h5>
                    <p>Instagram</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.slideItem}>
                <div className={`${styles.slideTxt}`}>
                  <p>
                    Lorem duis iaculis velit lorem feugiat interdum tortor
                    curabitur lectus. Ante lectus habitasse urna eu maecenas
                    integer consequat. A condimentum odio dolor semper ligula
                    commodo turpis ultrices aliquet fames sem.
                  </p>
                </div>
                <div className={styles.slideUser}>
                  <img
                    src={testImg2}
                    alt=""
                    className={`${styles.img2}`}
                    width="30px"
                  />
                  <div className={styles.center}>
                    <h5>Efe Aliu</h5>
                    <p>Facebook</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.slideItem}>
                <div className={`${styles.slideTxt}`}>
                  <p>
                    Lorem duis iaculis velit lorem feugiat interdum tortor
                    curabitur lectus. Ante lectus habitasse urna eu maecenas
                    integer consequat. A condimentum odio dolor semper ligula
                    commodo turpis ultrices aliquet fames sem.
                  </p>
                </div>
                <div className={styles.slideUser}>
                  <img
                    src={testImg2}
                    alt=""
                    className={`${styles.img2}`}
                    width="30px"
                  />
                  <div className={styles.center}>
                    <h5>Amaka Izu</h5>
                    <p>Twitter</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className={`custom-pag`}></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
