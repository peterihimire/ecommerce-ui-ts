import React, { useState, useEffect } from "react";
// import Header from "../../components/shared/header";
import Header from "../../components/shared/header";
import Backdrop from "../../components/shared/backdrop";
import { useLocation } from "react-router-dom";
import Footer from "../../components/shared/footer";
import { Outlet } from "react-router-dom";

import styles from "./styles.module.scss";

const WebsiteLayout: React.FC = () => {
  const router = useLocation();
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    setOpen(false);

    document.documentElement.classList.remove("_fixed");
    document.body.classList.remove("_fixed");
  }, [router.pathname]);

  return (
    <div className={`${styles.landingLayout}`}>
      <Backdrop
        open={open}
        clicked={() => {
          setOpen(false);
          document.documentElement.classList.remove("_fixed");
          document.body.classList.remove("_fixed");
        }}
      />

      <Header
        isOpen={open}
        clicked={() => {
          setOpen(!open);
          document.documentElement.classList.toggle("_fixed");
          document.body.classList.toggle("_fixed");
        }}
      />

      <main className={`${styles.main}`}>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default WebsiteLayout;
