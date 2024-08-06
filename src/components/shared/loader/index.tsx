import { LinearProgress } from "@mui/material";
import React from "react";
import Logo from "../assets/images/logo.svg";
import styles from "./styles.module.scss";

const Loader: React.FC = () => {
  return (
    <div className={`${styles.loader}`}>
      {/* <img src={Logo} alt="logo" /> */}
      <h4>BENKIH</h4>
      <LinearProgress
        sx={{
          width: "8%", // Ensure the progress bar fits within the container
          height: 5, // Adjust the height if needed
          "& .MuiLinearProgress-bar": {
            backgroundColor: "#9b2602", // Primary color
          },
          "& .MuiLinearProgress-bar1Indeterminate": {
            backgroundColor: "#9b2602", // Primary color for the moving bar
          },
          "& .MuiLinearProgress-bar2Indeterminate": {
            backgroundColor: "#6f1d00", // Secondary color for the moving bar
          },
          "& .MuiLinearProgress-root": {
            backgroundColor: "#e0e0e0", // Background color (track)
          },
          // Media query for small screens
          "@media (max-width: 600px)": {
            width: "30%",
          },
        }}
      />
    </div>
  );
};

export default Loader;
