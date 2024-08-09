import React, { useState, useEffect, useMemo } from "react";
import Hero from "../../shared/smallHero";
import Latest from "./Latest";
import { RootState } from "../../../redux/store.config";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../hooks/useTypedSelector";
import { addToCart, getCart } from "../../../redux/features/cart/cartSlice";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Collections: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);
  return (
    <HelmetProvider>
      <Helmet>
        <title>benkih - collections</title>
        <meta name="description" content="Description of my page" />
      </Helmet>

      {/* <Hero home={`home`} currentLink={`collections`} /> */}
      <Latest />
    </HelmetProvider>
  );
};

export default Collections;
