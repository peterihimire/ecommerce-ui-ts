import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import { CheckBox } from "@mui/icons-material";
import FeatureCard from "../../../ui/productCard";
import Select from "../../../ui/customSelect";
import product10 from "../../../../assets/images/product10.png";

import "./styles.scss";

const CollectionInfo = () => {
  return (
    <section className={`collection-info`}>
      <div className="wrapper">
        <div className={`collection-details`}>
          <div className={`detail-img`}>
            <img src={product10} alt="" />
          </div>
          <div className={`detail-txt`}>
            <h2>Rayban Sunshade</h2>
            <p>
              This is one of the best brands of sun shades you can buy in this
              era. Very cool to the eyes and is also stylish, with great
              untimely designs.This is one of the best brands of sun shades you
              can buy in this era. Very cool to the eyes and is also stylish,
              with great untimely designs.
            </p>
            <h4>$20.00</h4>
            <div className={`detail-extra-wrapper`}>
              <div className={`detail-extra`}>
                <span>Color</span>
                <ul className={`color-list`}>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
              <div className={`detail-extra`}>
                <span>Size</span>
                <div className={`detail-select`}>
                  <Select name="country" id="country" defaultValue="">
                    <option disabled value="">
                      Size
                    </option>
                    <option value="nig">XS</option>
                    <option value="gh">S</option>
                    <option value="sa">L</option>
                  </Select>
                </div>
              </div>

              <div className={`detail-extra`}>
                <span>Qty</span>
                <div className={`update-qty`}>
                  <button className={``}>-</button>
                  <div className={`qty-txt`}>2</div>
                  <button className={``}>+</button>
                </div>
              </div>
            </div>
            <div className={``}>
              <button
                className="btn-primary btn-block"
                style={{ height: "50px" }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionInfo;
