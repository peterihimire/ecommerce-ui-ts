import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import { CheckBox } from "@mui/icons-material";
// import FeatureCard from "../../../ui/productCard";
import Select from "../../../shared/customSelect";
import product10 from "../../../../assets/images/products/product10.png";

import styles from "./styles.module.scss";

const Product = () => {
  return (
    <section className={`${styles.collectionInfo}`}>
      <div className="wrapper">
        <div className={`${styles.collectionDetails}`}>
          <div className={`${styles.detailImg}`}>
            <img src={product10} alt="" />
          </div>
          <div className={`${styles.detailTxt}`}>
            <h5>Rayban Shades</h5>
            <p>
              This is one of the best brands of sun shades you can buy in this
              era. Very cool to the eyes and is also stylish, with great
              untimely designs.This is one of the best brands of sun shades you
              can buy in this era. Very cool to the eyes and is also stylish,
              with great untimely designs.
            </p>
            <h4>$20.00</h4>
            <div className={`${styles.detailExtraWrapper}`}>
              <div className={`${styles.detailExtra}`}>
                <span>Color</span>:
                <ul className={`${styles.colorList}`}>
                  <li></li>
                </ul>
              </div>
              <div className={`${styles.detailExtra}`}>
                <span>Size</span>:45
              </div>
              <div className={`${styles.detailExtra}`}>
                <span>Category</span>:Men
              </div>

              <div className={`${styles.detailExtra}`}>
                <span>Qty</span>:1
              </div>
            </div>
            <div className={``}>
              <button className="btn-primary " style={{ height: "50px" }}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
