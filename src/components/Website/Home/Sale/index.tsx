import React from "react";
import ProductCard from "../../../shared/productcard";
import { products } from "../../../../data-list";

import styles from "./styles.module.scss";

const Sale: React.FC = () => {
  return (
    <section className={`${styles.sale}`}>
      <div className={`${styles.wrapper} wrapper`}>
        <div className={`${styles.saleTitle}`}>
          <h3>On Sale Product</h3>
          <button className="btn btn-medium btn-primary">View more</button>
        </div>

        <div className={`${styles.productDiv}`}>
          {products.slice(1, 9).map((product) => {
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
    </section>
  );
};

export default Sale;
