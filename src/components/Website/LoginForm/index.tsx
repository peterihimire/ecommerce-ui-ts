import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Login from "./login";

const LoginForm: React.FC = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>login - benkih</title>
      </Helmet>

      <Login />
    </HelmetProvider>
  );
};

export default LoginForm;
