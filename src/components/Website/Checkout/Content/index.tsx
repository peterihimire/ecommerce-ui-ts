import React, { useState } from "react";
import ProductCard from "../../../shared/productcard";
import Checkbox from "../../../shared/customCheckbox";
import { products } from "../../../../data-list";
import Slider from "@mui/material/Slider";
import Form from "../Form";

// import { Slider } from "@material-ui/core";

import styles from "./styles.module.scss";

const Content: React.FC = () => {
  return (
    <section className={`${styles.latest}`}>
      <div className={`${styles.wrapper} wrapper`}>
        {/* <div className={`${styles.latestTitle}`}>
          <h3>Latest product</h3>
          <button className="btn btn-medium btn-primary">View more</button>
        </div> */}

        <div className={`${styles.collectionDiv}`}>
          <Form />
          <div className={`${styles.cartTotalDiv}`}>
            <div className={`${styles.checkoutHeader}`}>
              <h4>Your Order</h4>
            </div>
            <div className={`${styles.tableWrapper}`}>
              <table className={`${styles.table}`}>
                <thead>
                  <tr className={`${styles.tr}`}>
                    <th className={`${styles.th}`} style={{ width: "45%" }}>
                      Product
                    </th>

                    <th className={`${styles.th}`} style={{ width: "15%" }}>
                      Subtotal
                    </th>
                  </tr>
                </thead>
                <tbody className={`${styles.tbody}`}>
                  {products.slice(7, 11).map((product, index) => {
                    return (
                      <tr key={index}>
                        <td className={`${styles.td}`} style={{ width: "45%" }}>
                          <div className={`${styles.title}`}>
                            <p> {product.title}</p>
                          </div>
                        </td>

                        <td
                          className={`${styles.td}   ${styles.amt}`}
                          style={{ width: "15%" }}
                        >
                          ${product.price}
                        </td>
                      </tr>
                    );
                  })}

                  <tr className={`${styles.subtotal}`}>
                    <td className={`${styles.td}`} style={{ width: "45%" }}>
                      <div className={`${styles.title}`}>
                        <p> Subtotal</p>
                      </div>
                    </td>

                    <td
                      className={`${styles.td}   ${styles.amt}`}
                      style={{ width: "15%" }}
                    >
                      $1200.99
                    </td>
                  </tr>
                  <tr className={`${styles.total}`}>
                    <td className={`${styles.td}`} style={{ width: "45%" }}>
                      <div className={`${styles.title}`}>
                        <p> Total</p>
                      </div>
                    </td>

                    <td
                      className={`${styles.td}   ${styles.amt}`}
                      style={{ width: "15%" }}
                    >
                      $1200.99
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className={`${styles.checkoutNote}`}>
                <p>
                  Your personal data will be used to process your order, support
                  your experience throughout this website, and for other
                  purposes described in our privacy policy.
                </p>
              </div>

              <div className={`${styles.tableActions} `}>
                <button className="btn-block btn-small">place order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
