import React from "react";
import chooseImg from "../../../../assets/images/jeff-tumale-unsplash.jpeg";
import ProductCard from "../../../shared/productcard";
import { products } from "../../../../data-list";
import styles from "./styles.module.scss";

const Flash: React.FC = () => {
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
                    // infoProd={openModalHandler}
                    // addProd={addProductHandler}
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
