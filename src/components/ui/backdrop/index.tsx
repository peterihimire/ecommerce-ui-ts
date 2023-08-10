import React from "react";
import ReactDOM from "react-dom";

const backdrop = ({ open, clicked }) => {
  return ReactDOM.createPortal(
    <div className={`backdrop ${open ? "show" : ""}`} onClick={clicked}></div>,
    document.getElementById("backdrop"),
  );
};

export default backdrop;
