import React, { useEffect } from "react";
import Hero from "../../shared/smallHero";
import WhoWeAre from "./WhoWeAre";
import Choose from "./Choose";
import Testimonial from "./Testimonial";
import { RootState } from "../../../redux/store.config";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../hooks/useTypedSelector";
import { addToCart, getCart } from "../../../redux/features/cart/cartSlice";
import { Helmet, HelmetProvider } from "react-helmet-async";

const About: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);
  return (
    <HelmetProvider>
      <Helmet>
        <title>benkih- about us</title>
        <meta name="description" content="Description of my page" />
      </Helmet>
      {/* <Hero home={`home`} currentLink={`about us`} /> */}
      {/* <WhoWeAre /> */}
      <Choose />
      <Testimonial />
    </HelmetProvider>
  );
};

export default About;
