import React from "react";
import Form from "../form";

import styles from "./styles.module.scss";
// import Link from "next/link";
// import Image from "next/image";

const Register: React.FC = () => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.left}`}>
        <div className={`${styles.inner}`}>
          {/* <Link href='/'>
            <img src='/images/logo-light.svg' alt='' />
          </Link> */}
          {/* <h2>Safe Investments</h2>
          <p>
            Platform that allows you invest securely, safely with guarantee to
            their investment.
          </p> */}
          {/* <img src='/images/indicator.svg' alt='' /> */}
        </div>
      </div>

      <div className={`${styles.right}`}>
        <Form />
      </div>
    </div>
  );
};

export default Register;
