import React, { useState, useEffect } from "react";
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
import { addToCart } from "../../../../redux/features/cart/cartSlice";
import ImageLightBox from "../../../shared/imageLightbox";

import styles from "./styles.module.scss";

const Product: React.FC = () => {
  const location = useLocation();
  const params = useParams();
  const from = location?.state?.from?.pathname;
  console.log("This is from ....", from);

  const productInfo = useAppSelector(
    (state: RootState) => state.product.productData
  );
  // Ensure productImages is always defined
  const productImages: string[] = productInfo?.images || [];
  console.log("This is current product data ...", productInfo);

  const { prod_id } = params;
  console.log("Is this the correct stuff...", prod_id);

  const dispatch = useAppDispatch();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // Reset quantity when product changes
    setQuantity(1);
  }, [prod_id]);

  const handleDecrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleAddToCart = () => {
    // dispatch(addToCart({ prod_id: productInfo?.uuid, quantity }));
  };

  return (
    <section className={`${styles.collectionInfo}`}>
      <div className="wrapper">
        <div className={`${styles.collectionDetails}`}>
          <ImageLightBox images={productImages} />

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
                  <button className={styles.dsc} onClick={handleDecrease}>
                    <FontAwesomeIcon
                      icon={faMinus}
                      className={`${styles.close}`}
                    />
                  </button>
                  <div className={`${styles.qtyTxt}`}>{quantity}</div>
                  <button className={styles.asc} onClick={handleIncrease}>
                    <FontAwesomeIcon
                      icon={faPlus}
                      className={`${styles.close}`}
                    />
                  </button>
                </div>
              </div>
              <button className="btn-block btn-small" onClick={handleAddToCart}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
