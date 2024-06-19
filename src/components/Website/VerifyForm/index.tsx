import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Verify from "./verify";

const VerifyForm: React.FC = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>verify email - benkih</title>
      </Helmet>

      <Verify />
    </HelmetProvider>
  );
};

export default VerifyForm;
