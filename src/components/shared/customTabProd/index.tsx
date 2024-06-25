import React from "react";
import { CustomTabProdProps } from "../../../types/types";

import styles from "./styles.module.scss";

const CustomTabProd: React.FC<CustomTabProdProps> = ({
  children,
  activeTab,
  clicked = () => {}, // Provide a default empty function
  headers = [],
  headersSpaced = false,
  dot = false,
}) => {
  return (
    <div className={styles.tabs}>
      <div className={styles.tabsHeader}>
        <ul
          className={`hide-scrollbar ${styles.tabsHeaderList} ${
            headersSpaced ? styles.horizontalPadding : ""
          }`}
        >
          {headers.map((item) => {
            return (
              <li
                key={item.id}
                className={`${activeTab === item.id ? styles.active : ""}`}
              >
                <button onClick={() => clicked(item.id)}>
                  {dot && <span className={styles.dot}></span>}
                  {item.name}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {children}
    </div>
  );
};

export default CustomTabProd;
