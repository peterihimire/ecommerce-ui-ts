import React, { useState } from "react";
import { products } from "../../../../data-list";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faCaretDown,
  faChevronDown,
  faChevronUp,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.scss";

const FaqData: React.FC = () => {
  const [clicked, setClicked] = useState<number | null>(7);
  console.log("This is the initial state clicked...", clicked);

  const toggler = (index: number) => {
    console.log("This is clicked", clicked, typeof clicked);
    console.log("This is index", index, typeof index);
    if (clicked === index) {
      console.log("is clicked = index?", clicked === index);
      setClicked(null);
    } else {
      setClicked(index);
    }
  };

  return (
    <section className={`${styles.faqData}`}>
      <div className="wrapper">
        <div className={`${styles.container}`}>
          <div className={`${styles.left}`}>
            <div className={`${styles.title}`}>
              <span>faq</span>
              <h3>frequently asked questions</h3>
              <p>
                Yes welcome to our frequently asked questions. We have a full
                bunch of them below.
              </p>
            </div>

            <div className={`${styles.collapsibleContainer}`}>
              <ul className={`${styles.collapsible}`}>
                {products.slice(5, 11).map((product, index) => {
                  return (
                    <li key={index}>
                      <button onClick={() => toggler(Number(product.id))}>
                        <div className={`${styles.headInfo}`}>
                          <span>{product.title}</span>
                        </div>
                        <div className={`${styles.rotate}`}>
                          {clicked === Number(product.id) ? (
                            <FontAwesomeIcon
                              icon={faChevronUp}
                              className={`${styles.icon} ${styles.iconUp}`}
                            />
                          ) : (
                            <FontAwesomeIcon
                              icon={faChevronDown}
                              className={`${styles.icon} ${styles.iconDown}`}
                            />
                          )}
                        </div>
                      </button>

                      <div
                        className={`${`${styles.content}`} ${
                          clicked === Number(product.id) && styles.show
                        }`}
                      >
                        <p className={`subHead`}>{product.detail}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className={`${styles.right}`}>
            <div className={`${styles.needMore}`}>
              <h4>Need more help</h4>
              <p>
                We are available 24/7 to cater for your need. Feel free to
                contact us.
              </p>
              <button className="btn-block btn-small">Contact us</button>
            </div>

            <div className={`${styles.contactSale}`}>
              {/* <div className={`${styles.icon}`}> */}
              <FontAwesomeIcon
                icon={faPhone}
                className={`${styles.icon} ${styles.iconPhone}`}
              />
              {/* </div> */}
              <h4>Contact sale</h4>
              <p>Need more information about product or special offer.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqData;
