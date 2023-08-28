import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "../nav";
import { useLocation } from "react-router-dom";
import { HeaderProps } from "../../../types/HeaderProps.type";
// import { ReactComponent as Logo } from "../../../assets/images/logo.svg";
import "./styles.scss";

const Header: React.FC<HeaderProps> = ({ isOpen, clicked }: HeaderProps) => {
  const router = useLocation();

  const [isDropOpen, setDropOpen] = useState(false);
  const [bgChangee, setBgChangee] = useState(false);

  const dropHandler = (payload: boolean) => {
    setDropOpen(payload);
  };

  useEffect(() => {
    if (!isOpen) {
      setDropOpen(false);
    }
  }, [isOpen]);

  useEffect(() => {
    setDropOpen(false);
  }, [router.pathname]);

  useEffect(() => {
    const changeHeaderBg = () => {
      if (window.scrollY >= 40) {
        setBgChangee(true);
      } else {
        setBgChangee(false);
      }
    };

    window.addEventListener("scroll", changeHeaderBg);

    return () => {
      window.removeEventListener("scroll", changeHeaderBg);
    };
  }, []);

  return (
    <header className={`header   ${bgChangee || isOpen ? "bgHeader" : ""}`}>
      <div>
        <div className="first-wrapper-div">
          <div className="first-wrapper">
            <div className="items">This is the first header</div>
            <div className="items">This is the first header</div>
            <div className="items">This is the first header</div>
          </div>
        </div>

        <div className="wrapper">
          <div className="logo">
            <Link to="/">
              BRI<span>GGY</span>
            </Link>
          </div>

          <Nav
            bgChange={bgChangee}
            isDrop={isDropOpen}
            isOpen={isOpen}
            clicked={(payload: boolean) => dropHandler(payload)}
          />

          <div className="hamburgerBtn">
            <button
              type="button"
              aria-label="navigation button"
              onClick={clicked}
              className={`hamburger hamburger--spin ${
                isOpen ? "is-active" : ""
              }`}
            >
              <span className="hamburger-box">
                <span
                  className={`${"hamburger-inner hamburger-inner-dark"}`}
                ></span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
