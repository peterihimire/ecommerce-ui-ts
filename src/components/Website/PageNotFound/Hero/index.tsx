import React, { useCallback, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.scss";

const Hero: React.FC = () => {
  return (
    <div className={`${styles.aboutHero}`}>
      <div className={`${styles.aboutContainer} wrapper`}>
        <div className={`${styles.aboutLink}`}>
          <span>
            <h5>Home</h5>
            <FontAwesomeIcon
              icon={faChevronRight}
              className={`${styles.iconStyle}`}
            />
          </span>
          <h5>Page Not Found</h5>
        </div>

        <h2>Page Not Found</h2>
      </div>
    </div>
  );
};

export default Hero;
