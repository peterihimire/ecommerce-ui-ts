import React, {useEffect} from "react";
import Hero from "../../shared/smallHero";
import Choose from "./Choose";
import Form from "./Form";
import { RootState } from "../../../redux/store.config";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../hooks/useTypedSelector";
import { addToCart, getCart } from "../../../redux/features/cart/cartSlice";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Contact: React.FC = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
      dispatch(getCart());
    }, [dispatch]);
  return (
    <HelmetProvider>
      <Helmet>
        <title>contact - benkih</title>
        <meta name="description" content="Description of my page" />
      </Helmet>
      {/* <Hero home={`home`} currentLink={`contact us`} /> */}
      {/* <Form /> */}
      <Choose />
      {/* <Testimonial /> */}
    </HelmetProvider>
  );
};

export default Contact;
