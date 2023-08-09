import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
// import Link from "next/link";
// import Nav from "../dashboardNav";
// import Logo from "../../../public/images/logo-light.svg";
// import LogoDark from "../../../public/images/logo-dark.svg";
// import { useRouter } from "next/router";

const Header = ({ isOpen, clicked }) => {
  const [isDropOpen, setDropOpen] = useState(false);

  const [bgChange, setBgChange] = useState(false);

  // const router = useRouter();

  const dropHandler = (payload) => {
    setDropOpen(payload);
  };

  useEffect(() => {
    if (!isOpen) {
      setDropOpen(false);
    }
  }, [isOpen]);

  useEffect(
    () => {
      setDropOpen(false);
    },
    [
      // router.pathname
    ]
  );

  useEffect(() => {
    const changeHeaderBg = () => {
      if (window.scrollY >= 40) {
        setBgChange(true);
      } else {
        setBgChange(false);
      }
    };

    window.addEventListener("scroll", changeHeaderBg);

    return () => {
      window.removeEventListener("scroll", changeHeaderBg);
    };
  }, []);

  return (
    <header className={`${styles.header} `}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          {/* <Link href="/"> */}
          <a className={`${isDropOpen ? styles.lightLogo : ""}`}>
            {/* <Logo /> */}
            HalaDigital
          </a>
          {/* </Link> */}
        </div>

        {/* <Nav
          bgChange={bgChange}
          isDrop={isDropOpen}
          isOpen={isOpen}
          clicked={(payload) => dropHandler(payload)}
        /> */}

        <div className={styles.hamburgerBtn}>
          <button
            type="button"
            aria-label="navigation button"
            onClick={clicked}
            className={`hamburger hamburger--spring ${
              isOpen ? "is-active" : ""
            }`}
          >
            <span className="hamburger-box">
              <span
                className={`${"hamburger-inner  hamburger-dashboard"}`}
              ></span>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
