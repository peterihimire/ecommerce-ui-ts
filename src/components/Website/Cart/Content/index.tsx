import React, { useState, useEffect } from "react";
import Input from "../../../shared/qtyInput";
import { useLocation, Link, useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  useAppSelector,
  useAppDispatch,
} from "../../../../hooks/useTypedSelector";
import { RootState } from "../../../../redux/store.config";
import {
  deleteCartProduct,
  getCart,
  updateCart,
} from "../../../../redux/features/cart/cartSlice";

import styles from "./styles.module.scss";

const Content: React.FC = () => {
    const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});

  const cart = useAppSelector((state) => state.cart.cartData);

  const location = useLocation();
  const params = useParams();
  const from = location?.state?.from?.pathname;
  console.log("This is from ....", from);

  const productInfo = useAppSelector(
    (state: RootState) => state.product.productData
  );

  const { prod_id } = params;

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

  const [quantity, setQuantity] = useState(1);

  // useEffect(() => {
  //   // Reset quantity when product changes
  //   setQuantity(1);
  // }, [prod_id]);

  // const handleDecrease = () => {
  //   setQuantities((prev) => (prev > 1 ? prev - 1 : 1));
  // };

  // const handleIncrease = () => {
  //   setQuantities((prev) => prev + 1);
  // };

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
                        ₦{product.price}
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
                        ₦{product.price * product.quantity}
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

          <div className={`${styles.prodMobileView}`}>
            <ul>
              {cart?.products.map((product, index) => {
                return (
                  <li key={index} className={`${styles.prodList}`}>
                    <div className={`${styles.prodPix}`}>
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
                    </div>
                    <div className={`${styles.prodInfo}`}>
                      <div className={`${styles.title}`}>
                        <h6>{product.title}</h6>
                        <p>₦{product.price}</p>
                        <button
                          onClick={() => deleteProdHandler(product?.prod_uuid)}
                        >
                          remove
                        </button>
                      </div>
                      <div className={`${styles.input}`}>
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
                      </div>

                      <div className={`${styles.subtotal}`}>
                        <p>₦{product.price * product.quantity}</p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className={`${styles.mobActions} `}>
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
                  <h6>₦{cart?.total_price}</h6>
                </div>
                <div className={`${styles.cartTotal}`}>
                  <p>Total</p>
                  <h6>₦{cart?.total_price}</h6>
                </div>
              </div>
              <div className={`${styles.filterBtnGroup}`}>
                <button className="btn-block btn-primary" onClick={() => navigate("/checkout")}>
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
