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
  // addProd,
  // infoProd,
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
    <div>
      <div
        // data-aos="zoom-in"
        className={`${styles.productCard}`}
        key={id}
      >
        {/* <div className={`${styles.circleDiv}`}></div> */}
        <div className={`${styles.productDiv}`}>
          <img src={image} alt="" />
        </div>
        <ul className={`${styles.productActions}`}>
          {/* <li onClick={addProd} className={`${styles.productAct}`}>
            <ShoppingCartOutlined className={`${styles.shopIcon}`} />
          </li>
          <li onClick={infoProd} className={`${styles.productAct}`}>
            <Search className={`${styles.shopIcon}`} />
          </li>
          <li onClick={likeProd} className={`${styles.producAct}`}>
            <FavoriteBorderOutlined className={`${styles.shopIcon}`} />
          </li> */}
        </ul>
        <div className={`${styles.titlePrice}`}>
          <p>{title}</p>
          <div className={`${styles.price}`}>
            <p>${price}</p>
            <span>
              <p>${price}</p>
            </span>
          </div>

          <div className={`${styles.btnDiv}`}>
            <button className="btn btn-small btn-block">Add to cart</button>
          </div>
        </div>
      </div>
      {/* <div className={`title-price`}>
        <h5>{title}</h5>
        <h6>
          ${price}
          <span>${price}</span>
        </h6>
      </div> */}
    </div>
  );
};

export default ProductCard;
