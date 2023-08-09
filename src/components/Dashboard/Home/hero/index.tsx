import React, { useCallback } from "react";
// import handImg from "../../../../assets/images/phone2.png";
import { Link } from "react-router-dom";

import "./styles.scss";

const Hero = () => {
  return (
    <section className={`hero`}>
      {/* <div className="hero-skew"></div> */}
      {/* The 'wrapper' style without the curly braces is coming from the config scss file  */}
      <div className="wrapper">
        <div className={`containe`}>
          <div className={`left`}>
            <h1>
              One Stop <br /> Platform for you.
            </h1>

            <ul>
              <li>Digital Currency Exchange</li>
              <li>Bulk SMS</li>
              <li>Airtime & Data Bundle</li>
              <li>Cable TV Subscription</li>
              <li>Electricity Bill</li>
              <li>WAEC Result Checker PIN</li>
              <li>Naira and Crypto Currency Accepted.</li>
            </ul>

            <div className={`subscribe`}>
              <button className="btn-primary btn-large">Get Started</button>
            </div>
          </div>
          {/* <div className={`right`}>
            <img src={handImg} alt="" />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
