import React, { useState, useEffect } from "react";
import Backdrop from "../../components/shared/backdrop";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";

import styles from "./styles.module.scss";

const AuthLayout: React.FC = () => {
  const router = useLocation();
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    setOpen(false);

    document.documentElement.classList.remove("_fixed");
    document.body.classList.remove("_fixed");
  }, [router.pathname]);

  return (
    <div className={`${styles.authLayout}`}>
      <Backdrop
        open={open}
        clicked={() => {
          setOpen(false);
          document.documentElement.classList.remove("_fixed");
          document.body.classList.remove("_fixed");
        }}
      />

      <main className={`${styles.main}`}>
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
