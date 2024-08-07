import React, { useEffect } from "react";
import Hero from "../../shared/smallHero";
import SettingsContent from "./SettingsContent";
import { getCart } from "../../../redux/features/cart/cartSlice";
import { useAppDispatch } from "../../../hooks/useTypedSelector";

import { Helmet, HelmetProvider } from "react-helmet-async";

const Profile: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);
  return (
    <HelmetProvider>
      <Helmet>
        <title>benkih - profile</title>
        <meta name="description" content="Description of my page" />
      </Helmet>
      {/* <Hero home={`home`} currentLink={`profile`} /> */}

      <SettingsContent />
    </HelmetProvider>
  );
};

export default Profile;
