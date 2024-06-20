import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Register from "./password";

const RegisterForm: React.FC = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>regiter - benkih</title>
      </Helmet>

      <Register />
    </HelmetProvider>
  );
};

export default RegisterForm;
