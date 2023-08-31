import React from "react";
import pix1 from "../../../../assets/images/cat1.webp";
import pix2 from "../../../../assets/images/cat2.webp";
import pix3 from "../../../../assets/images/cat3.webp";

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
            <img src={pix2} alt="" />
            <div className={`${styles.catItemInfo}`}>
              <h4>Men Shoes</h4>
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
              <h4>Men Shoes</h4>
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
              <h4>Men Shoes</h4>
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
