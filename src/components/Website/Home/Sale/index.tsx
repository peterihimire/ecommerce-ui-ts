import React, { useState } from "react";
import ProductCard from "../../../shared/productcard";
import { products } from "../../../../data-list";
import CartNav from "../../../shared/cartNav";
import Backdrop from "../../../shared/backdrop";
import Modal from "../../../shared/modal";
import { Link } from "react-router-dom";
import product1 from "../../../../assets/images/products/product1.png";
import { RootState } from "../../../../redux/store";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../hooks/useTypedSelector";

import styles from "./styles.module.scss";

const Sale: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [open, setOpen] = useState(false);

  const productsList = useAppSelector(
    (state: RootState) => state.product.items
  );
  console.log("This is current product listings ...", productsList);

  const addProductHandler = () => {
    console.log("Add handler...");
    setOpen(true);
    document.documentElement.classList.add("_fixed");
    document.body.classList.add("_fixed");
  };

  // const openModalHandler = () => {
  //   console.log("Modal opened...");
  //   setShowModal(true);
  //   document.documentElement.classList.add("_fixed");
  //   document.body.classList.add("_fixed");
  // };

  const openModalHandler = () => {
    return <Link to="/collections/1"></Link>;
    // console.log("Modal opened...");
    // setShowModal(true);
    // document.documentElement.classList.add("_fixed");
    // document.body.classList.add("_fixed");
  };

  const closeModalHandler = () => {
    console.log("Modal closed...");
    setShowModal(false);
    document.documentElement.classList.remove("_fixed");
    document.body.classList.remove("_fixed");
  };
  return (
    <section className={`${styles.sale}`}>
      <div className={`${styles.wrapper} wrapper`}>
        <div className={`${styles.saleTitle}`}>
          <h3>On Sale Product</h3>
          <button className="btn btn-medium btn-primary">View more</button>
        </div>

        <div className={`${styles.productDiv}`}>
          {productsList.slice(0, 9).map((product) => {
            return (
              <ProductCard
                key={product.uuid}
                id={product.uuid}
                title={product.title}
                price={product.price}
                oldPrice={product.oldPrice}
                image={`http://localhost:4040/${product.images[0]}`}
                infoProd={product.uuid}
                addProd={addProductHandler}
                // likeProd={likeProductHandler}
              />
            );
          })}
        </div>
      </div>

      <CartNav
        isOpen={open}
        clicked={() => {
          setOpen(false);

          document.documentElement.classList.remove("_fixed");
          document.body.classList.remove("_fixed");
        }}
      />
      <Backdrop
        open={open}
        clicked={() => {
          setOpen(false);
          document.documentElement.classList.remove("_fixed");
          document.body.classList.remove("_fixed");
        }}
      />

      {showModal && (
        <Modal click={closeModalHandler}>
          <div className={`modal-children`}>
            <div className={`modal-img`}>
              <img src={product1} alt="" />
            </div>
            <div className={`modal-txt`}>
              <h3>iPhone 13 Pro Max</h3>
              <h6>$1400</h6>
              <button
                className="btn-primary btn-block"
                style={{ height: "40px", marginBottom: "10px" }}
              >
                Add to Cart
              </button>
              <Link to="/collections/1" className={`modal-link`}>
                View More Details
              </Link>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default Sale;

// {
//   showModal && (
//     <Modal click={closeModalHandler}>
//       <div className={`${styles.modalChildren}`}>
//         <div className={`${styles.modalImg}`}>
//           <img src={product1} alt="" />
//         </div>
//         <div className={`${styles.modalTxt}`}>
//           <h3>iPhone 13 Pro Max</h3>
//           <h6>$1400</h6>
//           <button
//             className="btn-primary btn-block"
//             style={{ height: "40px", marginBottom: "10px" }}
//           >
//             Add to Cart
//           </button>
//           <Link to="/collections/1" className={`${styles.modalLink}`}>
//             View More Details
//           </Link>
//         </div>
//       </div>
//     </Modal>
//   );
// }
