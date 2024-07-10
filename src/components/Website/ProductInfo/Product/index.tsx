import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation, Link, useNavigate, useParams } from "react-router-dom";
import {
  faCaretRight,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import product10 from "../../../../assets/images/products/product10.png";
import { RootState } from "../../../../redux/store";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../hooks/useTypedSelector";

import styles from "./styles.module.scss";

const Product: React.FC = () => {
  const location = useLocation();
  const params = useParams();
  const from = location?.state?.from?.pathname;
  console.log("This is from ....", from);

  const productInfo = useAppSelector(
    (state: RootState) => state.product.productData
  );
  console.log("This is current product data ...", productInfo);

  const { prod_id } = params;
  console.log("Is this the correct stuff...", prod_id);
  return (
    <section className={`${styles.collectionInfo}`}>
      <div className="wrapper">
        <div className={`${styles.collectionDetails}`}>
          <div className={`${styles.detailImg}`}>
            <img
              src={`http://localhost:4040/${productInfo?.images[0]}`}
              alt=""
            />
            <div className={`${styles.imgBox}`}>
              <img src={product10} alt="" /> <img src={product10} alt="" />{" "}
              <img src={product10} alt="" /> <img src={product10} alt="" />
            </div>
          </div>
          <div className={`${styles.detailTxt}`}>
            <h5>{productInfo?.title}</h5>

            <div className={`${styles.price}`}>
              {productInfo?.oldPrice !== undefined &&
                productInfo?.oldPrice > 0 && (
                  <p className={styles.linethrough}>${productInfo?.oldPrice}</p>
                )}
              <span>
                <p className={productInfo?.oldPrice ? styles.underline : ""}>
                  ${productInfo?.price}
                </p>
              </span>
            </div>

            <p>{productInfo?.desc}</p>
            <div className={`${styles.detailExtraWrapper}`}>
              <div className={`${styles.detailExtra}`}>
                <div>SKU:</div>
                <span>JJKAF893JND</span>
              </div>
              <div className={`${styles.detailExtra}`}>
                <div>Category:</div>

                {productInfo?.categories.map((cat) => {
                  return <span>{cat} </span>;
                })}
              </div>
              <div className={`${styles.detailExtra}`}>
                <div>Color:</div>
                <span>{productInfo?.color}</span>
              </div>
              <div className={`${styles.detailStock}`}>
                <div>{productInfo?.countInStock} in stock</div>
              </div>
            </div>
            <div className={`${styles.qtyAdd}`}>
              <div className={`${styles.qtyInput}`}>
                <div className={`${styles.updateQty}`}>
                  <button className={styles.dsc}>
                    <FontAwesomeIcon
                      icon={faMinus}
                      className={`${styles.close}`}
                    />
                  </button>
                  <div className={`${styles.qtyTxt}`}>2</div>
                  <button className={styles.asc}>
                    <FontAwesomeIcon
                      icon={faPlus}
                      className={`${styles.close}`}
                    />
                  </button>
                </div>
                {/* <div>Qty:</div>1 */}
                {/* <Input
                  // labelText="Enter Email"
                  type="number"
                  name="number"
                  id="number"
                  required
                  placeholder="Qty"
                  // value={loginForm.email}
                  // onChange={(e) => handleFormChange(e.target)}

                  // value={formik.values.email}
                  // onBlur={(e: FocusEvent<HTMLInputElement>) => formik.handleBlur(e)}
                  // onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  //   formik.handleChange(e)
                  // }
                  // onBlur={(e: FocusEvent<HTMLInputElement>) => formik.handleBlur(e)}
                  // onChange={(e) => formik.handleChange(e)}
                  // onBlur={formik.handleBlur}
                  // onChange={formik.handleChange}
                /> */}
              </div>
              <button className="btn-block btn-small">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
