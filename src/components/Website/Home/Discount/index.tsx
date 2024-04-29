import React from "react";
// import chooseImg from "../../../../assets/images/birgith-roosipuu-unsplash.jpeg";
import styles from "./styles.module.scss";
import pix1 from "../../../../assets/images/birgith-roosipuu-unsplash.jpeg";
import pix2 from "../../../../assets/images/ashim-unsplash.jpeg";

const Discount: React.FC = () => {
  return (
    <section className={`${styles.discount}`}>
      <div className={`wrapper ${styles.discountDiv}`}>
        <div className={`${styles.left}`}>
          <div className={`${styles.discountItem} `}>
            <img src={pix1} alt="" />
            <div className={`${styles.discountInfo}`}>
              <h4>Discount up to 45% only this month.</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <button className="btn-block btn-small">Claim Promo</button>
            </div>
          </div>
        </div>

        <div className={`${styles.right}`}>
          <div className={`${styles.discountItem} `}>
            <img src={pix2} alt="" />
            <div className={`${styles.discountInfo}`}>
              <h4>New arrivals, kid's shoes.</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <button className="btn-block btn-small">Shop Now</button>
            </div>
          </div>
        </div>
        {/* <div className={`${styles.left}`}>
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
        </div> */}
      </div>
    </section>
  );
};

export default Discount;
