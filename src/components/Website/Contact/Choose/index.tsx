import React from "react";
import Form from "../Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMap,
  faPhone,
  faEnvelopeOpen,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./styles.module.scss";

const Choose: React.FC = () => {
  return (
    <section className={`${styles.choose}`}>
      <div className={`wrapper`}>
        <div className={`${styles.container}`}>
          <div className={`${styles.left}`}>
            <div className={`${styles.leftContent}`}>
              <div className={`${styles.item}`}>
                <div className={`${styles.number}`}>
                  <FontAwesomeIcon icon={faMap} className={`${styles.icon}`} />
                  <h4>Address</h4>
                </div>
                <div className={`${styles.info}`}>
                  <p>
                    Back of Nike Art Gallery, Piwoyi community, Lugbe Airport
                    Road Abuja(FCT).
                  </p>
                </div>
              </div>

              <div className={`${styles.item} ${styles.border}`}>
                <div className={`${styles.number}`}>
                  <FontAwesomeIcon
                    icon={faPhone}
                    className={`${styles.icon}`}
                  />
                  <h4>Phone</h4>
                </div>
                <div className={`${styles.info}`}>
                  <p>Mobile: 08060958134</p>
                  <p>Hotline: 234(806)0958134</p>
                </div>
              </div>

              <div className={`${styles.item}`}>
                <div className={`${styles.number}`}>
                  <FontAwesomeIcon
                    icon={faEnvelopeOpen}
                    className={`${styles.icon}`}
                  />
                  <h4>Email</h4>
                </div>
                <div className={`${styles.info}`}>
                  <p>support@benkih.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.right}`}>
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
