import React from "react";

import styles from "./styles.module.scss";

interface CustomAlertProps {
  children: string;
}

const alertBox: React.FC<CustomAlertProps> = ({ children }) => {
  return <div className={`${styles.alertBox}`}>{children}</div>;
};

export default alertBox;
