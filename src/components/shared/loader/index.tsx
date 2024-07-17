// import { LinearProgress } from "@material-ui/core";
import React from "react";
import Logo from "../assets/images/logo.svg";

const Loader = () => {
  return (
    <div className="loader">
      <img src={Logo} alt="logo" />
      {/* <LinearProgress color="primary" /> */}
    </div>
  );
};

export default Loader;
