import React, { useRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { NavLink, useLocation, Link } from "react-router-dom";
import {
  useAppSelector,
  useAppDispatch,
} from "../../../hooks/useTypedSelector";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { getCart } from "../../../redux/features/cart/cartSlice";
import { CartNavProps } from "../../../types/types";

import styles from "./styles.module.scss";

const CartNav: React.FC<CartNavProps> = ({ isOpen, clicked }) => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart.cartData);
  console.log(location);
  console.log(location.pathname.split("/")[1]);
  const fullPath = location.pathname;
  let pathUrl = location.pathname.split("/")[1];

  const [openSlider, setOpenSlider] = useState(isOpen);
  console.log(openSlider);
  console.log(isOpen);
  console.log(`Hello this is cart data with all the products...`, cart);

  useEffect(() => {
    setOpenSlider(isOpen);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      dispatch(getCart());
    }
  }, [isOpen, dispatch]);

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

        <div className={`${styles.cartFooter}`}>Logout</div>
      </div>
    </div>,
    document.body
  );
};

export default CartNav;
