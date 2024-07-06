import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "../nav";
import { useLocation } from "react-router-dom";
import { HeaderProps } from "../../../types/HeaderProps.type";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";

import styles from "./styles.module.scss";

const HeaderTwo: React.FC<HeaderProps> = ({ isOpen, clicked }: HeaderProps) => {
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
    <header
      className={`${styles.header}   ${
        bgChangee || isOpen ? styles.bgHeader : ""
      }`}
    >
      <div>
        <div className={`${styles.firstWrapperDiv}`}>
          <div className={`${styles.firstWrapper}`}>
            <div className={`${styles.items}`}>+(234)80-3049-6069</div>
            <div className={`${styles.items}`}>
              Express delivery and free returns within 30 days
            </div>
            <div className={`${styles.items} ${styles.socialList}`}>
              {" "}
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
                className={`${styles.socialLink}`}
              >
                <FontAwesomeIcon icon={faSquareInstagram} />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className={`${styles.socialLink}`}
              >
                {/* <Youtube width="17px" /> */}
                <FontAwesomeIcon icon={faFacebookSquare} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className={`${styles.socialLink}`}
              >
                <FontAwesomeIcon icon={faTwitterSquare} />
                {/* <Twitter width="17px" /> */}
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className={`${styles.socialLink}`}
              >
                {/* <Instagram width="17px" /> */}
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>

        <div className={`${styles.wrapper}`}>
          {bgChangee ? (
            <div className={`${styles.logo}`}>
              <Link to="/">
                BEN<span>KIH</span>
              </Link>
            </div>
          ) : (
            <div className={`${styles.logo}`}>
              <Link to="/" className={`${styles.dark}`}>
                BEN<span>KIH</span>
              </Link>
            </div>
          )}

          {/* <Nav
            bgChange={bgChangee}
            isDrop={isDropOpen}
            isOpen={isOpen}
            clicked={(payload: boolean) => dropHandler(payload)}
          /> */}

          <div className={`${styles.hamburgerBtn}`}>
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

export default HeaderTwo;
