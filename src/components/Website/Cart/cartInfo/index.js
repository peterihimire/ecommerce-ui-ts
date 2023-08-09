import React from "react";
import product10 from "../../../../assets/images/product10.png";

import "./styles.scss";

const CartInfo = () => {
  return (
    <section className={`cart-info`}>
      <div className="wrapper">
        <div className={`title`}>
          <h2>My Cart</h2>
        </div>
        <div className={`cart-header`}>
          <button
            className={`btn-secondary`}
            style={{ height: "50px", width: "150px" }}
          >
            continue shopping
          </button>
          <div className={`cart-count`}>
            <span>shopping cart(21)</span>
            <span>my wishlist(7)</span>
          </div>
          <button
            className={`btn-primary`}
            style={{ height: "50px", width: "150px" }}
          >
            Clear Cart
          </button>
        </div>
        <div className={`cart-grid`}>
          <div className={`cart-items`}>
            <div className={`cart-item`}>
              <div className={`img-div`}>
                <img src={product10} alt="" />
              </div>
              <div className={`txt-div`}>
                <div className={`txt`}>
                  <p>
                    <div className={`span`}>Product:</div> iPhone 13 Pro Max
                  </p>
                  <p>
                    <div className={`span`}>Id:</div> 9390iq-05jkrnfjk
                  </p>
                  <p>
                    <div className={`span`}>Color:</div> Space Grey
                  </p>
                  <p>
                    <div className={`span`}>Size:</div> 13
                  </p>
                </div>
                <div className={`qty`}>
                  <div className={`update-qty`}>
                    <button className={``}>-</button>
                    <div className={`qty-txt`}>2</div>
                    <button className={``}>+</button>
                  </div>
                  <p> $400</p>
                </div>
              </div>
            </div>
            <div className={`cart-item`}>
              <div className={`img-div`}>
                <img src={product10} alt="" />
              </div>
              <div className={`txt-div`}>
                <div className={`txt`}>
                  <p>
                    <div className={`span`}>Product:</div> iPhone 13 Pro Max
                  </p>
                  <p>
                    <div className={`span`}>Id:</div> 9390iq-05jkrnfjk
                  </p>
                  <p>
                    <div className={`span`}>Color:</div> Space Grey
                  </p>
                  <p>
                    <div className={`span`}>Size:</div> 13
                  </p>
                </div>
                <div className={`qty`}>
                  <div className={`update-qty`}>
                    <button className={``}>-</button>
                    <div className={`qty-txt`}>2</div>
                    <button className={``}>+</button>
                  </div>
                  <p> $400</p>
                </div>
              </div>
            </div>
            
          </div>
          <div className={`cart-order`}>
            <div className={`order-summary`}>
              <h5>Order Summary</h5>
              <div className={`txt`}>
                <div className={`txt-span`}>
                  <span>Sub Total</span> <span>$ 80.00</span>
                </div>
                <div className={`txt-span`}>
                  <span>Estimated Shipping</span> <span>$ 80.00</span>
                </div>
                <div className={`txt-span`}>
                  <span>Shipping Discount</span> <span>$ 80.00</span>
                </div>
                <div className={`txt-span`}>
                  <span>Total</span> <span>$ 80.00</span>
                </div>
              </div>
              <button
                className="btn-block btn-primary"
                style={{ height: "50px" }}
              >
                Checkout Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartInfo;
