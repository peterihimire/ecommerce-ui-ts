import React, { useState } from "react";
import chooseImg from "../../../../assets/images/jeff-tumale-unsplash.jpeg";
import ProductCard from "../../../shared/productcard";
import { products } from "../../../../data-list";
import styles from "./styles.module.scss";

const Flash: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [open, setOpen] = useState(false);

  const addProductHandler = () => {
    console.log("Add handler...");
    setOpen(true);
    document.documentElement.classList.add("_fixed");
    document.body.classList.add("_fixed");
  };

  const openModalHandler = () => {
    console.log("Modal opened...");
    setShowModal(true);
    document.documentElement.classList.add("_fixed");
    document.body.classList.add("_fixed");
  };

  const closeModalHandler = () => {
    console.log("Modal closed...");
    setShowModal(false);
    document.documentElement.classList.remove("_fixed");
    document.body.classList.remove("_fixed");
  };

  return (
    <section className={`${styles.flash}`}>
      <div className={` wrapper`}>
        <div className={`${styles.content}`}>
          <div className={`${styles.flashImg}`}>
            <img src={chooseImg} alt="" />
            <div className={`${styles.txt}`}>
              <h4>Flash sale</h4>
              <h5>Sale will end at:</h5>
            </div>
          </div>
          <div className={`${styles.flashProd}`}>
            <div className={`${styles.prod}`}>
              {products.slice(3, 5).map((product) => {
                return (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    image={product.images[0]}
                    infoProd={openModalHandler}
                    addProd={addProductHandler}
                    // likeProd={likeProductHandler}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Flash;
