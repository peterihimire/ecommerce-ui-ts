import React, { useEffect, useState } from "react";
import { NavLink, useLocation, Link } from "react-router-dom";
// import useDarkMode from "use-dark-mode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import product7 from "../../../assets/images/products/product12.png";
import { CartNavProps } from "../../../types/types";

import styles from "./styles.module.scss";

const CartNav: React.FC<CartNavProps> = ({ isOpen, clicked }) => {
  const location = useLocation();
  console.log(location);
  console.log(location.pathname.split("/")[1]);
  const fullPath = location.pathname;
  let pathUrl = location.pathname.split("/")[1];

  // const darkMode = useDarkMode(false);
  // console.log(darkMode);
  const [openSlider, setOpenSlider] = useState(isOpen);
  console.log(openSlider);
  console.log(isOpen);

  // const closeCartHandler = (isOpen) => {
  //   console.log("Clicked the x button", isOpen);
  // };

  return (
    <nav className={`${styles.cartNav} ${isOpen ? styles.show : ""}`}>
      <div className={`${styles.cartWrapper}`}>
        <div className={`${styles.cartHeader}`}>
          <button
            className={`${styles.flexHead}`}
            onClick={clicked}
            style={{ background: "none" }}
          >
            <FontAwesomeIcon
              icon={faCaretRight}
              className={`${styles.close}`}
            />
          </button>
          <p className={`${styles.flexHead}`}>MY CART</p>
          <button
            className={`${styles.flexHead}`}
            style={{ background: "none" }}
          ></button>
        </div>

        <div className={`${styles.cartBody}`}>
          <div className={`${styles.cartList}`}>
            <div className={`${styles.cartItem}`}>
              <div className={`${styles.cartItemImg}`}>
                <img src={product7} alt="" />
              </div>
              <div className={`${styles.cartItemText}`}>
                <p>Hisense A7GQ 50"</p>
                <h5>$ 1200</h5>
                <div className={`${styles.updateQty}`}>
                  <button className={``}>-</button>
                  <div className={`${styles.qtyTxt}`}>2</div>
                  <button className={``}>+</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.cartFooter}`}>
          <button className="btn-block btn-primary">View Cart</button>
        </div>
      </div>
    </nav>
  );
};

export default CartNav;
