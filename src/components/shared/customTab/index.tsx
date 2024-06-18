import React from "react";
import { CustomTabProps } from "../../../types/types";

import styles from "./styles.module.scss";

const CustomTabs: React.FC<CustomTabProps> = ({
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
          {headers.map((item) => (
            <li
              onClick={() => clicked(item.id)}
              key={item.id}
              className={activeTab === item.id ? styles.active : ""}
            >
              <button>
                <div className={styles.buttonIcon}>
                  {dot && <span className={styles.dot}></span>}
                  {item.icon && <img src={item.icon} alt="" />}
                  {item.name}
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.tabsContent}>{children}</div>
    </div>
  );
};

export default CustomTabs;
