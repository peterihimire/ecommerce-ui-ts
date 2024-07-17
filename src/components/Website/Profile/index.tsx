import React from "react";
import Hero from "./Hero";
import SettingsContent from "./SettingsContent";

import { Helmet, HelmetProvider } from "react-helmet-async";

const Profile: React.FC = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>benkih - profile</title>
        <meta name="description" content="Description of my page" />
      </Helmet>
      <Hero />

      <SettingsContent />
    </HelmetProvider>
  );
};

export default Profile;
