import React from "react";
import chooseImg from "../../../../assets/images/birgith-roosipuu-unsplash.jpeg";
import styles from "./styles.module.scss";

const Choose: React.FC = () => {
  return (
    <section className={`${styles.choose}`}>
      <div className={`wrapper`}>
        <div className={`${styles.container}`}>
          <div className={`${styles.left}`}>
            <p>Why choose us</p>
            <h3>Get your luxurious elegance with our shoes.</h3>
            <div className={`${styles.leftContent}`}>
              <div className={`${styles.item}`}>
                <div className={`${styles.number}`}>
                  <div>1</div>
                </div>
                <div className={`${styles.info}`}>
                  <h4>Affordable Price</h4>
                  <p>
                    Lacus venenatis donec conubia parturient mi aliquam lacinia
                    sollicitudin mauris
                  </p>
                </div>
              </div>

              <div className={`${styles.item}`}>
                <div className={`${styles.number}`}>
                  <div>2</div>
                </div>
                <div className={`${styles.info}`}>
                  <h4>Top Quality Product</h4>
                  <p>
                    Lacus venenatis donec conubia parturient mi aliquam lacinia
                    sollicitudin mauris
                  </p>
                </div>
              </div>

              <div className={`${styles.item}`}>
                <div className={`${styles.number}`}>
                  <div>3</div>
                </div>
                <div className={`${styles.info}`}>
                  <h4>Customer Experience</h4>
                  <p>
                    Lacus venenatis donec conubia parturient mi aliquam lacinia
                    sollicitudin mauris
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.right}`}>
            <img src={chooseImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
