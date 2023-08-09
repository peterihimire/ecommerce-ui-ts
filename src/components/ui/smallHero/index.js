import React from "react";
// import heroImg from "../../../../assets/images/dev-guy-team-ladies.png";
import { KeyboardArrowRight } from "@mui/icons-material";
import { Link } from "react-router-dom";

import "./styles.scss";

const SmallHero = ({ title }) => {
  return (
    <section className={`small-hero`}>
      {/* The 'wrapper' style without the curly braces is coming from the config scss file  */}
      <div className="wrapper">
        <div className={`container`}>
          <div className={`left`}>
            <h4>{title}</h4>
          </div>
          <div className={`rightt`}>
            <span>
              <Link to="/">Home</Link>
            </span>
            <KeyboardArrowRight className="keyarrowright" />
            {title}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmallHero;
