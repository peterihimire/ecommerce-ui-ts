import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import styles from "./styles.module.scss";
// import { CloseOutlined } from "@ant-design/icons";

const Modal = ({ children, click, header, bodyClass, ...props }) => {
  return ReactDOM.createPortal(
    <div className={styles.modal} onClick={click}>
      <div
        className={`${styles.modalBody} ${bodyClass ? bodyClass : ""}`}
        {...props}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>{header}</h2>

        <div className={styles.cancel}>
          <button onClick={click}>
            {/* <CloseOutlined /> */}
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>

        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
