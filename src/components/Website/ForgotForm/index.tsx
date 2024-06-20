import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Login from "./forgot";

const LoginForm: React.FC = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>forgot password - benkih</title>
      </Helmet>

      <Login />
    </HelmetProvider>
  );
};

export default LoginForm;
