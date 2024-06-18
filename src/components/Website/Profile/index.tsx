import React from "react";
import Hero from "./Hero";
import SettingsContent from "./SettingsContent";
// import WhoWeAre from "./WhoWeAre";
// import FaqData from "./FaqData";
// import Explore from "./Explore";

import { Helmet, HelmetProvider } from "react-helmet-async";

const Profile: React.FC = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Profile - benkih</title>
        <meta name="description" content="Description of my page" />
      </Helmet>
      <Hero />

      <SettingsContent />
      {/* <Explore /> */}
    </HelmetProvider>
  );
};

export default Profile;
