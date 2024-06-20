import React from "react";
import Form from "../form";
import { useLocation, Link, useNavigate } from "react-router-dom";

import styles from "./styles.module.scss";
// import Link from "next/link";
// import Image from "next/image";

const Password: React.FC = () => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.left}`}>
        <div className={`${styles.inner}`}>
          <Link to="/" className={styles.home}>
            {/* <img src="/images/logo-light.svg" alt="" /> */}
            Back To Home
          </Link>
          <h2>Happy Shopping</h2>
          <p>
            Platform that allows you invest securely, safely with guarantee to
            their investment.
          </p>
          {/* <img src='/images/indicator.svg' alt='' /> */}
        </div>
      </div>

      <div className={`${styles.right}`}>
        <Form />
      </div>
    </div>
  );
};

export default Password;
