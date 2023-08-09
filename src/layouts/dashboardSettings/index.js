import React, { useState, useEffect } from "react";
import "./styles.scss";
import Header from "../../components/ui/dashboardHeader";
import Backdrop from "../../components/ui/backdrop";
// import Footer from "../../components/ui/footer";
import Sidebar from "../../components/ui/dashboardNav";
import DashboardHeader from "../../components/ui/dashboardMainHeader";
import { Outlet } from "react-router-dom";

// import { useRouter } from "next/router";

const DashboardSettingsLayout = () => {
  const [open, setOpen] = useState(false);

  // const router = useRouter();

  useEffect(
    () => {
      setOpen(false);

      document.documentElement.classList.remove("_fixed");
      document.body.classList.remove("_fixed");
    },
    [
      // router.pathname
    ]
  );

  return (
    <div className={`layoutt`}>
      <Sidebar isOpen={open} />
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
      <DashboardHeader />
      <main className={`main`}>
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardSettingsLayout;
