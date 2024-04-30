import React from "react";
import pix1 from "../../../../assets/images/vecteezy_abstract-white-fluid-wave-background_7075692.jpg";
import pix2 from "../../../../assets/images/pexels-frans-van-heerden-201846-847371.jpeg"
import pix3 from "../../../../assets/images/loafers.webp";

import styles from "./styles.module.scss";

const Categories: React.FC = () => {
  return (
    <section className={`${styles.homeCategories}`}>
      <div className="wrapper">
        {/* <div className={`${styles.featuredHead}`}>
          <h3>Categories</h3>
        </div> */}
        <div className={`${styles.catCarousel}`}>
          <div className={`${styles.catItem} cat1`}>
            <img src={pix1} alt="" />
            <div className={`${styles.catItemInfo}`}>
              <h4>Men's Shoes</h4>
              <p>
                This is the category section for men shoes, immerse yourselve in
                house.
              </p>
              <button className="btn-block btn-small">Shop Now</button>
            </div>
          </div>
          <div className={`${styles.catItem} cat1`}>
            <img src={pix2} alt="" />
            <div className={`${styles.catItemInfo}`}>
              <h4>Women's Shoes</h4>
              <p>
                This is the category section for men shoes, immerse yourselve in
                house.
              </p>
              <button className="btn-block btn-small">Shop Now</button>
            </div>
          </div>
          <div className={`${styles.catItem} cat1`}>
            <img src={pix3} alt="" />
            <div className={`${styles.catItemInfo}`}>
              <h4>Kid's Shoes</h4>
              <p>
                This is the category section for men shoes, immerse yourselve in
                house.
              </p>
              <button className="btn-block btn-small">Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
