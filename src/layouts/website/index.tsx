import React, { useState, useEffect } from "react";
// import Header from "../../components/shared/header";
import Header from "../../components/shared/headerTwo";
import Backdrop from "../../components/shared/backdrop";
import SideNav from "../../components/shared/sideNav";
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

  const sidebarData = [
    {
      label: "All Categories",
      subItems: [
        {
          label: "Electronics",
          subItems: [
            { label: "Phone", link: "/" },
            { label: "Tablet", link: "/" },
          ],
        },
        {
          label: "Fashion",
          subItems: [
            { label: "Men", link: "/" },
            { label: "Women", link: "/" },
          ],
        },
        {
          label: "Home",
          subItems: [
            { label: "Gas cooker", link: "/" },
            { label: "Cutlery", link: "/" },
          ],
        },
        {
          label: "Office",
          subItems: [
            { label: "Table", link: "/" },
            { label: "Chair", link: "/" },
          ],
        },
      ],
    },
    {
      label: "Home",
      link: "/",
    },
    {
      label: "About Us",
      link: "/about",
    },
    {
      label: "Contact Us",
      link: "/contact",
    },
    {
      label: "Collections",
      link: "/collections",
    },
    {
      label: "FAQ",
      link: "/faq",
    },
  ];

  // export default sidebarData;

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

      <SideNav
        isOpen={open}
        clicked={() => {
          setOpen(false);
          document.documentElement.classList.remove("_fixed");
          document.body.classList.remove("_fixed");
        }}
        items={sidebarData}
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
