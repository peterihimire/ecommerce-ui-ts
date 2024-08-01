import React, { useCallback, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.scss";

interface Props {
  home?: string;
  currentLink?: string;
}

const SmallHero: React.FC<Props> = ({ home, currentLink }) => {
  return (
    <div className={`${styles.smallHero}`}>
      <div className={`${styles.smallContainer} wrapper`}>
        <div className={`${styles.smallLink}`}>
          <span>
            {/* <h5> */}
            <Link to="/" className={`${styles.homeLink}`}>
              {home}
            </Link>
            {/* </h5> */}
            {home && (
              <FontAwesomeIcon
                icon={faChevronRight}
                className={`${styles.iconStyle}`}
              />
            )}
          </span>
          {home && <h5>{currentLink}</h5>}
        </div>

        <h2>{currentLink}</h2>
      </div>
    </div>
  );
};

export default SmallHero;
