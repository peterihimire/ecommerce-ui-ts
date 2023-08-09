import React, { useEffect, useState } from "react";
import { NavLink, useLocation, Link } from "react-router-dom";
import useDarkMode from "use-dark-mode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import product7 from "../../../assets/images/product7.png";
import "./styles.scss";

const CartNav = ({ isOpen, clicked }) => {
  const location = useLocation();
  console.log(location);
  console.log(location.pathname.split("/")[1]);
  const fullPath = location.pathname;
  let pathUrl = location.pathname.split("/")[1];

  const darkMode = useDarkMode(false);
  console.log(darkMode);
  const [openSlider, setOpenSlider] = useState(isOpen);
  console.log(openSlider);
  console.log(isOpen);
  const closeCartHandler = (isOpen) => {
    console.log("Clicked the x button", isOpen);
  };
  return (
    <nav className={`cart-nav ${isOpen ? "show" : ""}`}>
      <div className={`cart-wrapper`}>
        <div className={`cart-header`}>
          <button
            className={`flex-head`}
            onClick={clicked}
            style={{ background: "none" }}
          >
            <FontAwesomeIcon icon={faCaretRight} />
          </button>
          <p className={`flex-head`}>MY CART</p>
          <button
            className={`flex-head`}
            style={{ background: "none" }}
          ></button>
        </div>

        <div className={`cart-body`}>
          <div className={`cart-list`}>
            <div className={`cart-item`}>
              <div className={`cart-item-img`}>
                <img src={product7} alt="" />
              </div>
              <div className={`cart-item-txt`}>
                <p>Hisense A7GQ 50"</p>
                <h5>$ 1200</h5>
                <div className={`update-qty`}>
                  <button className={``}>-</button>
                  <div className={`qty-txt`}>2</div>
                  <button className={``}>+</button>
                </div>
              </div>
            </div>

            <div className={`cart-item`}>
              <div className={`cart-item-img`}>
                <img src={product7} alt="" />
              </div>
              <div className={`cart-item-txt`}>
                <p>Hisense A7GQ 50"</p>
                <h5>$ 1200</h5>
                <div className={`update-qty`}>
                  <button className={``}>-</button>
                  <div className={`qty-txt`}>2</div>
                  <button className={``}>+</button>
                </div>
              </div>
            </div>

            <div className={`cart-item`}>
              <div className={`cart-item-img`}>
                <img src={product7} alt="" />
              </div>
              <div className={`cart-item-txt`}>
                <p>Hisense A7GQ 50"</p>
                <h5>$ 1200</h5>
                <div className={`update-qty`}>
                  <button className={``}>-</button>
                  <div className={`qty-txt`}>2</div>
                  <button className={``}>+</button>
                </div>
              </div>
            </div>

            <div className={`cart-item`}>
              <div className={`cart-item-img`}>
                <img src={product7} alt="" />
              </div>
              <div className={`cart-item-txt`}>
                <p>Hisense A7GQ 50"</p>
                <h5>$ 1200</h5>
                <div className={`update-qty`}>
                  <button className={``}>-</button>
                  <div className={`qty-txt`}>2</div>
                  <button className={``}>+</button>
                </div>
              </div>
            </div>

            <div className={`cart-item`}>
              <div className={`cart-item-img`}>
                <img src={product7} alt="" />
              </div>
              <div className={`cart-item-txt`}>
                <p>Hisense A7GQ 50"</p>
                <h5>$ 1200</h5>
                <div className={`update-qty`}>
                  <button className={``}>-</button>
                  <div className={`qty-txt`}>2</div>
                  <button className={``}>+</button>
                </div>
              </div>
            </div>
            <div className={`cart-item`}>
              <div className={`cart-item-img`}>
                <img src={product7} alt="" />
              </div>
              <div className={`cart-item-txt`}>
                <p>Hisense A7GQ 50"</p>
                <h5>$ 1200</h5>
                <div className={`update-qty`}>
                  <button className={``}>-</button>
                  <div className={`qty-txt`}>2</div>
                  <button className={``}>+</button>
                </div>
              </div>
            </div>

            <div className={`cart-item`}>
              <div className={`cart-item-img`}>
                <img src={product7} alt="" />
              </div>
              <div className={`cart-item-txt`}>
                <p>Hisense A7GQ 50"</p>
                <h5>$ 1200</h5>
                <div className={`update-qty`}>
                  <button className={``}>-</button>
                  <div className={`qty-txt`}>2</div>
                  <button className={``}>+</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`cart-footer`}>
          <button className="btn-block btn-primary">View Cart</button>
        </div>
      </div>
    </nav>
  );
};

export default CartNav;
