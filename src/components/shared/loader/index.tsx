// import { LinearProgress } from "@material-ui/core";
import { LinearProgress } from "@mui/material";
import React from "react";
import Logo from "../assets/images/logo.svg";
import styles from "./styles.module.scss";

const Loader: React.FC = () => {
  return (
    <div className={styles.loader}>
      {/* <img src={Logo} alt="logo" /> */}
      <h4>BENKIH</h4>
      <LinearProgress style={{ color: "#9b2602" }} />
    </div>
  );
};

export default Loader;
