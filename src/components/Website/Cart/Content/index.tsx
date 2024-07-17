import React, { useState } from "react";
import Input from "../../../shared/qtyInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import Checkbox from "../../../shared/customCheckbox";
import { products } from "../../../../data-list";
import Slider from "@mui/material/Slider";
// import { Slider } from "@material-ui/core";
import { useAppSelector } from "../../../../hooks/useTypedSelector";

import styles from "./styles.module.scss";

const Content: React.FC = () => {
  const cart = useAppSelector((state) => state.cart.cartData);
  return (
    <section className={`${styles.latest}`}>
      <div className={`${styles.wrapper} wrapper`}>
        {/* <div className={`${styles.latestTitle}`}>
          <h3>Latest product</h3>
          <button className="btn btn-medium btn-primary">View more</button>
        </div> */}

        <div className={`${styles.collectionDiv}`}>
          <div className={`${styles.tableWrapper}`}>
            <table className={`${styles.table}`}>
              <thead>
                <tr className={`${styles.tr}`}>
                  <th className={`${styles.th}`} style={{ width: "10%" }}></th>
                  <th className={`${styles.th}`} style={{ width: "45%" }}>
                    Product
                  </th>
                  <th className={`${styles.th}`} style={{ width: "15%" }}>
                    Price
                  </th>
                  <th className={`${styles.th}`} style={{ width: "15%" }}>
                    Quantity
                  </th>
                  <th className={`${styles.th}`} style={{ width: "15%" }}>
                    Subtotal
                  </th>
                </tr>
              </thead>
              <tbody className={`${styles.tbody}`}>
                {cart?.products.map((product, index) => {
                  return (
                    <tr key={index}>
                      <td className={`${styles.td}`} style={{ width: "10%" }}>
                        {product.image ? (
                          <img
                            src={product.image}
                            alt="product"
                            className={`${styles.productImg}`}
                            width="100"
                            height="100"
                          />
                        ) : (
                          <FontAwesomeIcon
                            icon={faImage}
                            className={`${styles.imgIcon}`}
                          />
                        )}
                      </td>
                      <td className={`${styles.td}`} style={{ width: "45%" }}>
                        <div className={`${styles.title}`}>
                          <p> {product.title}</p>
                          <button>remove</button>
                        </div>

                        {/* <p>{`${document?.programme?.abbr}`}</p> */}
                      </td>
                      <td
                        className={`${styles.td} ${styles.amt}`}
                        style={{ width: "15%" }}
                      >
                        ${product.price}
                      </td>

                      <td className={`${styles.td}  `} style={{ width: "15%" }}>
                        {/* <p>{`${
                          document?.semester?.name === 1
                            ? "First Semester"
                            : "Second Semester"
                        }`}</p> */}

                        <Input
                          // labelText="Full Name"
                          type="text"
                          name="fullname"
                          id="fullname"
                          // required

                          value={String(product.quantity)}
                          // value={loginForm.email}
                          // onChange={(e) => handleFormChange(e.target)}
                          // value={formik.values.fullname}
                          // onBlur={formik.handleBlur}
                          // onChange={formik.handleChange}
                        />
                      </td>
                      <td
                        className={`${styles.td}   ${styles.amt}`}
                        style={{ width: "15%" }}
                      >
                        ${product.price * product.quantity}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            {/* {products.slice(3, 11).map((product) => {
              return (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  image={product.images[0]}
                  infoProd={product.id}
                  // infoProd={openModalHandler}
                  addProd={addProductHandler}
                  // likeProd={likeProductHandler}
                />
              );
            })} */}
            <div className={`${styles.tableActions} `}>
              <button className="btn-block btn-small-sec">UPDATE CART</button>
            </div>
          </div>
          <div className={`${styles.cartTotalDiv}`}>
            <div className={`${styles.cartTotalContainer}`}>
              <div className={`${styles.cartTotalHeader}`}>
                <h4>Cart Totals</h4>
              </div>
              <div className={`${styles.cartTotalPrice}`}>
                <div className={`${styles.cartSubtotal}`}>
                  <p>Subtotal</p>
                  <h6>${cart?.total_price}</h6>
                </div>
                <div className={`${styles.cartTotal}`}>
                  <p>Total</p>
                  <h6>${cart?.total_price}</h6>
                </div>
              </div>
              <div className={`${styles.filterBtnGroup}`}>
                <button className="btn-block btn-primary">
                  Proceed To Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
