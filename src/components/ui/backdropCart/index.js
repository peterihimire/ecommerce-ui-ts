import React from "react";
import ReactDOM from "react-dom";

const backdropCart = ({ open, clicked }) => {
  return ReactDOM.createPortal(
    <div className={`backdrop-cart ${open ? "show" : ""}`} onClick={clicked}></div>,
    document.getElementById("backdrop-cart"),
  );
};

export default backdropCart;
