import React from "react";
import HomeHero from "./Home/hero";
import OneWallet from "./Home/oneWallet";
import { Helmet } from "react-helmet";

const HomePage = () => {
  return (
    <div className="homepage">
      <Helmet>
        <title>Dashboard | HalaDigital</title>
      </Helmet>
      {/* <div className="wrapper"> */}
        <HomeHero />
        <OneWallet />
      {/* </div> */}
    </div>
  );
};

export default HomePage;
