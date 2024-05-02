import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ProductCardProps } from "../../../types/types";

import {
  ShoppingCartOutlined,
  FavoriteBorderOutlined,
  Search,
} from "@mui/icons-material";

import styles from "./styles.module.scss";

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  addProd,
  infoProd,
  // likeProd,
  image,
  title,
  price,
}: // slash,
ProductCardProps) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
    AOS.refresh();
  }, []);

  return (
    <div
      // data-aos="zoom-in"
      className={`${styles.productCard}`}
      key={id}
    >
      <div className={`${styles.sale}`}>
        <div>Sale!</div>
      </div>
      {/* <div className={`${styles.circleDiv}`}></div> */}
      <div onClick={infoProd} className={`${styles.productDiv}`}>
        <img src={image} alt="" />
      </div>

      <div className={`${styles.titlePrice}`}>
        <p>{title}</p>
        <div className={`${styles.price}`}>
          <p>${price}</p>
          <span>
            <p>${price}</p>
          </span>
        </div>

        <div className={`${styles.btnDiv}`}>
          <button onClick={addProd} className="btn btn-small btn-block">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
