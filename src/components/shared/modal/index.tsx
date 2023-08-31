import React from "react";
import ReactDOM from "react-dom";

import styles from "./styles.module.scss";

interface Props {
  header?: string;
  bodyClass?: string;
  click?: () => void;
  children?: JSX.Element | JSX.Element[];
}

const Modal: React.FC<Props> = ({
  children,
  click,
  header,
  bodyClass,
  ...props
}) => {
  return ReactDOM.createPortal(
    <div className={`${styles.modal}`} onClick={click}>
      <div
        className={`${styles.modalBody} ${bodyClass ? bodyClass : ""}`}
        {...props}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>{header}</h2>

        <div className={`${styles.cancel}`}>
          {/* <button onClick={click}>X</button> */}
        </div>

        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
