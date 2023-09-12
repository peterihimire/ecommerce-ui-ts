import React from "react";
import chooseImg from "../../../../assets/images/birgith-roosipuu-unsplash.jpeg";
import styles from "./styles.module.scss";

const Discount: React.FC = () => {
  return (
    <section className={`${styles.discount}`}>
      <div className={`wrapper`}>
        <div className={`${styles.left}`}>
          <div className={`${styles.exploreText}`}>
            <h3>Discount up to 45% only this month.</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <button className="btn-primary btn-medium btn-block">
              Claim promo
            </button>
          </div>
        </div>
        <div className={`${styles.right}`}>
          <div className={`${styles.exploreText}`}>
            <h3>New arrivals, kid's shoes.</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <button className="btn-primary btn-medium btn-block">
              Shop now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discount;
