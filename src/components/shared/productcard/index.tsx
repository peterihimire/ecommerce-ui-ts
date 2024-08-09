import React, { useEffect } from "react";
import { NavLink, useLocation, Link } from "react-router-dom";
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
  oldPrice,
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
        {oldPrice !== undefined && oldPrice > 0 && <div>Sale!</div>}
      </div>

      {/* <Link to={`/collections/${infoProd}`}>
        <div className={`${styles.productDiv}`}>
          <img src={image} alt="" />
        </div>
      </Link> */}

      <div className={`${styles.productDiv}`}>
        <Link to={`/collections/${infoProd}`}>
          <img src={image} alt="" />
        </Link>
      </div>

      <div className={`${styles.titlePrice}`}>
        <p>{title}</p>

        <div className={`${styles.price}`}>
          {oldPrice !== undefined && oldPrice > 0 && (
            <p className={styles.linethrough}>₦{oldPrice}</p>
          )}
          <span>
            <p className={oldPrice ? styles.underline : ""}>₦{price}</p>
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
