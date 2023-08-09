import React from "react";
import HomeHero from "./hero";
import OneWallet from "./oneWallet";
// import Design from "./design";
import { Helmet } from "react-helmet";

const HomePage = () => {
  return (
    <div className="homepage">
      <Helmet>
        <title>Admin | HalaDigital</title>
      </Helmet>
      {/* <div className="wrapper"> */}
        <HomeHero />
        <OneWallet />
      {/* </div> */}
    </div>
  );
};

export default HomePage;
