import React, { useState, useEffect } from "react";
import Input from "../../../shared/qtyInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  useAppSelector,
  useAppDispatch,
} from "../../../../hooks/useTypedSelector";
import {
  deleteCartProduct,
  getCart,
  updateCart,
} from "../../../../redux/features/cart/cartSlice";

import styles from "./styles.module.scss";

const Content: React.FC = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});

  const cart = useAppSelector((state) => state.cart.cartData);

  const handleQtyChange = (prod_uuid: string, qty: number) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [prod_uuid]: qty,
    }));
  };

  console.log("These are quantities...", quantities);

  const updateCartHandler = async () => {
    try {
      const updatePromises = Object.keys(quantities).map((prod_uuid) =>
        dispatch(updateCart({ prod_id: prod_uuid, qty: quantities[prod_uuid] }))
      );
      await Promise.all(updatePromises);
      await dispatch(getCart()).unwrap();
      toast.success("Cart updated successfully");
    } catch (error) {
      console.log(error);
      toast.error("Failed to update cart");
    }
  };

  const deleteProdHandler = async (id: string) => {
    console.log("Delete clicked");
    const cartPayload = id;
    console.log("This is cartpayload id...", cartPayload);

    try {
      const response = dispatch(deleteCartProduct(cartPayload));
      console.log(response);
      await dispatch(deleteCartProduct(cartPayload)).unwrap();
      await dispatch(getCart()).unwrap();
      toast.success("Product deleted and cart updated successfully");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (cart?.products) {
      const initialQuantities: { [key: string]: number } = {};
      cart.products.forEach((product) => {
        initialQuantities[product.prod_uuid] = product.quantity;
      });
      setQuantities(initialQuantities);
    }
  }, [cart]);

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  return (
    <section className={`${styles.latest}`}>
      <div className={`${styles.wrapper} wrapper`}>
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
                          <button
                            onClick={() =>
                              deleteProdHandler(product?.prod_uuid)
                            }
                          >
                            remove
                          </button>
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
                          name="qty"
                          id="qty"
                          value={String(quantities[product.prod_uuid])}
                          onChange={(e) =>
                            handleQtyChange(
                              product.prod_uuid,
                              Number(e.target.value)
                            )
                          }
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
              <button
                className="btn-block btn-small-sec"
                onClick={updateCartHandler}
              >
                UPDATE CART
              </button>
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
      <ToastContainer />
    </section>
  );
};

export default Content;
