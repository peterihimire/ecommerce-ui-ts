import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";

import styles from "./styles.module.scss";

const Banner: React.FC = () => {
  return (
    <section className={`${styles.errorPage}`}>
      <div className={`${styles.wrapper}`}>
        <div className={`${styles.errorContent}`}>
          <FontAwesomeIcon icon={faBoxOpen} className={`${styles.box}`} />
          <h5>Page Not Found</h5>
          <p>
            The page you’re looking for isn’t available. Try to search again or
            use the go back button below.
          </p>
          <Link to="/">
            <button className="btn-primary btn-medium">Back To Home</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
