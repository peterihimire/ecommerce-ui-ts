import React, { useCallback, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { RootState } from "../../../../redux/store.config";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../hooks/useTypedSelector";
import styles from "./styles.module.scss";

const Hero: React.FC = () => {
  const productInfo = useAppSelector(
    (state: RootState) => state.product.productData
  );
  console.log("This is current product data ...", productInfo);
  return (
    <div className={`${styles.aboutHero}`}>
      <div className={`${styles.aboutContainer} wrapper`}>
        <div className={`${styles.aboutLink}`}>
          {/* <span>
            <h5>Home</h5>
            <FontAwesomeIcon
              icon={faChevronRight}
              className={`${styles.iconStyle}`}
            />
          </span>
          <h5>Product</h5> */}
        </div>

        <h2>{productInfo?.title}</h2>
      </div>
    </div>
  );
};

export default Hero;
