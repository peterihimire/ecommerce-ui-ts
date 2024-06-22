import React, { useRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";
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

  useEffect(() => {
    setOpenSlider(isOpen);
  }, [isOpen]);

  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleBackdropClick = (event: MouseEvent) => {
      if (
        backdropRef.current &&
        backdropRef.current.contains(event.target as Node)
      ) {
        clicked();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleBackdropClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleBackdropClick);
    };
  }, [isOpen, clicked]);

  return ReactDOM.createPortal(
    <div
      className={`${styles.cartNav} ${
        openSlider ? styles.show : styles.hidden
      }`}
    >
      <div className={`${styles.cartWrapper}`}>
        <div className={`${styles.cartHeader}`}>
          <div className={`${styles.shoppingCart}`}>
            <p className={`${styles.text}`}>shopping cart</p>
            <div
              className={`${styles.cartCount}`}
              style={{ background: "none" }}
            >
              <div>3</div>
            </div>
          </div>

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
          <Link to="/cart" className="btn-block btn-medium-sec">
            View Cart
            {/* <button className="btn-block btn-medium-sec">View Cart</button> */}
          </Link>
          <Link to="/checkout" className="btn-block btn-medium">
            Checkout
            {/* <button className="btn-block btn-medium">Checkout</button> */}
          </Link>
          {/* <button className="btn-block btn-medium">View Cart</button>
          <button className="btn-block btn-medium-sec">Checkout</button> */}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default CartNav;
