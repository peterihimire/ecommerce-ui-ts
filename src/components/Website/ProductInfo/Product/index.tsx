import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import { CheckBox } from "@mui/icons-material";
// import FeatureCard from "../../../ui/productCard";
import Select from "../../../shared/customSelect";
import customInput from "../../../shared/customInput";
import Input from "../../../shared/customInput";
import product10 from "../../../../assets/images/products/product10.png";

import styles from "./styles.module.scss";

const Product = () => {
  return (
    <section className={`${styles.collectionInfo}`}>
      <div className="wrapper">
        <div className={`${styles.collectionDetails}`}>
          <div className={`${styles.detailImg}`}>
            <img src={product10} alt="" />
            <div className={`${styles.imgBox}`}>
              <img src={product10} alt="" /> <img src={product10} alt="" />{" "}
              <img src={product10} alt="" /> <img src={product10} alt="" />
            </div>
          </div>
          <div className={`${styles.detailTxt}`}>
            <h5>Rayban Shades</h5>

            <div className={`${styles.price}`}>
              <p>$2000</p>
              <span>
                <p>$1999</p>
              </span>
            </div>

            <p>
              This is one of the best brands of sun shades you can buy in this
              era. Very cool to the eyes and is also stylish, with great
              untimely designs.This is one of the best brands of sun shades you
              can buy in this era. Very cool to the eyes and is also stylish,
              with great untimely designs.
            </p>
            <div className={`${styles.detailExtraWrapper}`}>
              {/* <div className={`${styles.detailExtra}`}>
                <span>SKU</span>:
                <ul className={`${styles.colorList}`}>
                  <li></li>
                </ul>
              </div> */}
              <div className={`${styles.detailExtra}`}>
                <div>SKU:</div>
                <span>JJKAF893JND</span>
              </div>
              <div className={`${styles.detailExtra}`}>
                <div>Category:</div>
                <span>Sneakers</span>
              </div>
              <div className={`${styles.detailStock}`}>
                <div>100 in stock</div>
              </div>
            </div>
            <div className={`${styles.qtyAdd}`}>
              <div className={`${styles.qtyInput}`}>
                {/* <div>Qty:</div>1 */}
                <Input
                  // labelText="Enter Email"
                  type="number"
                  name="number"
                  id="number"
                  required
                  placeholder="Qty"
                  // value={loginForm.email}
                  // onChange={(e) => handleFormChange(e.target)}

                  // value={formik.values.email}
                  // onBlur={(e: FocusEvent<HTMLInputElement>) => formik.handleBlur(e)}
                  // onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  //   formik.handleChange(e)
                  // }
                  // onBlur={(e: FocusEvent<HTMLInputElement>) => formik.handleBlur(e)}
                  // onChange={(e) => formik.handleChange(e)}
                  // onBlur={formik.handleBlur}
                  // onChange={formik.handleChange}
                />
              </div>
              <button className="btn-block btn-small">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
