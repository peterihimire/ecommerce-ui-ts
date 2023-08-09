import React from "react";
import CartInfo from "./cartInfo";
import { Helmet } from "react-helmet";

const Cart = () => {
  return (
    <div className={`homepage`}>
      <Helmet>
        <title>About Us | Who We Are - Benkih</title>
      </Helmet>

      {/* <SmallHero title={`Who We Are`} /> */}

      <CartInfo />
    </div>
  );
};

export default Cart;
