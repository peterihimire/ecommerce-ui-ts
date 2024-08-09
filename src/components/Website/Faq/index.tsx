import React, { useEffect } from "react";
import Hero from "../../shared/smallHero";
import FaqData from "./FaqData";
import Explore from "./Explore";
import { RootState } from "../../../redux/store.config";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../hooks/useTypedSelector";
import { addToCart, getCart } from "../../../redux/features/cart/cartSlice";

import { Helmet, HelmetProvider } from "react-helmet-async";

const Faq: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);
  return (
    <HelmetProvider>
      <Helmet>
        <title>benkih - faq</title>
        <meta name="description" content="Description of my page" />
      </Helmet>
      {/* <Hero home={`home`} currentLink={`FAQ`} /> */}

      <FaqData />
      <Explore />
    </HelmetProvider>
  );
};

export default Faq;
