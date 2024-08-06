import React, { useRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { NavLink, useLocation, Link } from "react-router-dom";
// import useDarkMode from "use-dark-mode";
import {
  useAppSelector,
  useAppDispatch,
} from "../../../hooks/useTypedSelector";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretRight,
  faImage,
  faClose,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import product7 from "../../../assets/images/products/product12.png";
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

  // const darkMode = useDarkMode(false);
  // console.log(darkMode);
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
          <div className={`${styles.shoppingCart}`}>
            <p className={`${styles.text}`}>shopping cart</p>
            <div
              className={`${styles.cartCount}`}
              style={{ background: "none" }}
            >
              <div>{cart?.total_qty ? cart?.total_qty : 0}</div>
            </div>
          </div>

          <button
            className={`${styles.flexHead}`}
            onClick={clicked}
            style={{ background: "none" }}
          >
            <FontAwesomeIcon icon={faClose} className={`${styles.close}`} />
          </button>
        </div>

        <div className={`${styles.cartBody}`}>
          <ul className={`${styles.cartList}`}>
            {cart?.products.map((prod, index) => {
              return (
                <li key={index} className={`${styles.cartItem}`}>
                  <div className={`${styles.cartItemImg}`}>
                    {prod.image ? (
                      <img src={prod.image} alt="" />
                    ) : (
                      <FontAwesomeIcon
                        icon={faImage}
                        className={`${styles.imgIcon}`}
                      />
                    )}
                  </div>
                  <div className={`${styles.cartItemText}`}>
                    <h5>{prod.title}</h5>
                    <p>
                      {prod.quantity} <span>x</span> ${prod.price}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <div className={`${styles.cartSubtotal}`}>
          <p>subtotal :</p>
          <span>${cart?.total_price}</span>
        </div>

        <div className={`${styles.cartFooter}`}>
          <Link
            onClick={() => {
              setOpenSlider(!isOpen);
              clicked();
            }}
            to="/cart"
            className="btn-block btn-medium-sec"
          >
            View Cart
          </Link>
          <Link
            onClick={() => {
              setOpenSlider(!isOpen);
              clicked();
            }}
            to="/checkout"
            className="btn-block btn-medium"
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default CartNav;
