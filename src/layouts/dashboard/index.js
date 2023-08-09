import React, { useState, useEffect } from "react";
import "./styles.scss";
import Header from "../../components/ui/dashboardHeader";
import Backdrop from "../../components/ui/backdrop";
// import Footer from "../../components/ui/footer";
import Sidebar from "../../components/ui/dashboardNav";
// import CartNav from "../../components/ui/cartNav";
import DashboardHeader from "../../components/ui/dashboardMainHeader";
import DashboardRightBar from "../../components/ui/dashboardRightBar";
import { Outlet } from "react-router-dom";

// import { useRouter } from "next/router";

const DashboardLayout = () => {
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
      {/* <CartNav isOpen={open} /> */}
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
        <div className={`main-wrapper`}>
          <div className={`centerSide`}>
            <Outlet />
          </div>
          <div className={`rightSide`}>
            <DashboardRightBar />
            <DashboardRightBar />
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
