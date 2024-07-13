import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavLink, useLocation } from "react-router-dom";
import Nav from "../navTwo";
import { HeaderProps } from "../../../types/HeaderProps.type";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import styles from "./styles.module.scss";

const HeaderTwo: React.FC<HeaderProps> = ({ isOpen, clicked }: HeaderProps) => {
  const router = useLocation();

  const [isDropOpen, setDropOpen] = useState(false);
  const [bgChangee, setBgChangee] = useState(false);
  const [showCategories, setShowCategories] = useState(false);

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
      }
      `}
    >
      <div>
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

          <Nav
            bgChange={bgChangee}
            isDrop={isDropOpen}
            isOpen={isOpen}
            clicked={(payload: boolean) => dropHandler(payload)}
          />

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
        <div className={`${styles.firstWrapperDiv}`}>
          <div className={`${styles.firstWrapper}`}>
            <div className={`${styles.categories}`}>
              <button
                className={styles.hasDropdownBtn}
                onClick={() => {
                  setShowCategories(!showCategories);
                }}
              >
                all categories
                <span>
                  <FontAwesomeIcon icon={faBars} className={styles.iconStyle} />
                </span>
              </button>

              <div
                className={`${styles.dropdownMenu} ${
                  showCategories ? styles.show : ""
                }`}
              >
                <div className={styles.dropdownContainer}>
                  <ul className={styles.dropdownWrapper}>
                    <li>
                      <Link to="/overview">
                        <div className={styles.dropIcon}>
                          {/* <img src="/images/overview.svg" /> */}
                        </div>
                        <div className={styles.dropText}>
                          <span className={styles.dropTextHead}>Overview</span>
                          <span className={styles.dropDesc}>
                            Take a closer look at our platform and how well we
                            can get you the result you desire
                          </span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <div className={styles.dropIcon}>
                          {/* <img src="/images/learning.svg" /> */}
                        </div>
                        <div className={styles.dropText}>
                          <span className={styles.dropTextHead}>
                            Learning Path
                          </span>
                          <span className={styles.dropDesc}>
                            Customized learning programs based on the needs of
                            teams
                          </span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/hands-on-learning">
                        <div className={styles.dropIcon}>
                          {/* <img src="/images/bulb brain 1.svg" /> */}
                        </div>
                        <div className={styles.dropText}>
                          <span className={styles.dropTextHead}>
                            Hands-on Labs
                          </span>
                          <span className={styles.dropDesc}>
                            Simulators of real-world cloud difficulties are
                            easily accessible.
                          </span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/skills-assessment">
                        <div className={styles.dropIcon}>
                          {/* <img src="/images/skills.svg" /> */}
                        </div>
                        <div className={styles.dropText}>
                          <span className={styles.dropTextHead}>
                            Skills Assessment
                          </span>
                          <span className={styles.dropDesc}>
                            Quickly and simply map your company's cloud talent.
                          </span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <div className={styles.dropIcon}>
                          {/* <img src="/images/rocket 1.svg" /> */}
                        </div>
                        <div className={styles.dropText}>
                          <span className={styles.dropTextHead}>
                            Accelerator Program
                          </span>
                          <span className={styles.dropDesc}>
                            Raise teams' cloud knowledge to a common level in a
                            short amount of time
                          </span>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <div className={styles.dropIcon}>
                          {/* <img src="/images/cloud-computing 1.svg" /> */}
                        </div>
                        <div className={styles.dropText}>
                          <span className={styles.dropTextHead}>
                            Cloud Playground
                          </span>
                          <span className={styles.dropDesc}>
                            Try our risk-free cloud sandboxes for AWS, GCP and
                            Azure
                          </span>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <ul className={`${styles.items} ${styles.navLinks}`}>
              <li>
                <NavLink to="/" className={styles.dark}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className={styles.dark}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className={styles.dark}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className={styles.dark}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className={styles.dark}>
                  Home
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderTwo;
