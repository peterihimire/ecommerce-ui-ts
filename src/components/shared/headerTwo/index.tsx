import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { NavLink, useLocation } from "react-router-dom";
import Nav from "../navTwo";
import { HeaderProps } from "../../../types/HeaderProps.type";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  useAppSelector,
  useAppDispatch,
} from "../../../hooks/useTypedSelector";

import {
  ArrowDownward,
  DarkModeOutlined,
  Search,
  PersonOutline,
  ShoppingBagOutlined,
  FavoriteBorder,
  AccountCircleOutlined,
  PersonOutlineRounded,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { RootState } from "../../../redux/store";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import BackdropCart from "../../shared/backdropcart";
import { logoutUser } from "../../../redux/features/auth/authSlice";

import styles from "./styles.module.scss";

const HeaderTwo: React.FC<HeaderProps> = ({ isOpen, clicked }: HeaderProps) => {
  const router = useLocation();
  const dispatch = useAppDispatch();
  const location = useLocation();
  console.log(location);

  const [isDropOpen, setDropOpen] = useState(false);
  const [bgChangee, setBgChangee] = useState(false);
  const [showCategories, setShowCategories] = useState(false);

  const currentUser = useAppSelector((state: RootState) => state.user);
  const cart = useAppSelector((state: RootState) => state.cart.cartData);

  const profileRef = useRef<HTMLDivElement>(null); // Proper initialization
  const menuRef = useRef<HTMLDivElement>(null); // Proper initialization
  const searchRef = useRef<HTMLDivElement>(null); // Proper initialization
  const barRef = useRef<HTMLDivElement>(null); // Proper initialization
  const [cartOpen, setCartOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [openBar, setOpenBar] = useState(false);

  console.log("This is open", open);

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

  const addProductHandler = () => {
    console.log("Add handler...");
    setCartOpen(true);
    document.documentElement.classList.add("_fixed");
    document.body.classList.add("_fixed");
  };

  const handleLogout = async () => {
    try {
      await dispatch(logoutUser());
      // navigate("/auth/login");
    } catch (error) {
      console.error("Logout error:", error);
      // Handle error if needed
    }
  };

  // const cart = useAppSelector((state) => state.cart.cartData);

  // const darkMode = useDarkMode(false);
  // console.log(darkMode);
  // const [openSlider, setOpenSlider] = useState(isOpen);
  // console.log(openSlider);
  console.log(isOpen);
  console.log(`Hello this is cart data with all the products...`, cart);
  const fullPath = location.pathname;

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
              <div className={`${styles.hamburgerBtn}`}>
                <button
                  type="button"
                  aria-label="navigation button"
                  onClick={clicked}
                  className={`hamburger hamburger--spin ${
                    isOpen ? "is-active" : ""
                  }`}
                >
                  {/* <FontAwesomeIcon icon={faBars} className={styles.iconStyle} /> */}
                  <span className="hamburger-box">
                    <span
                      className={`${"hamburger-inner hamburger-inner-dark"}`}
                    ></span>
                  </span>
                </button>
              </div>
              <Link to="/">
                BEN<span>KIH</span>
              </Link>
            </div>
          ) : (
            <div className={`${styles.logo}`}>
              <div className={`${styles.hamburgerBtn}`}>
                <button
                  type="button"
                  aria-label="navigation button"
                  onClick={clicked}
                  className={`hamburger hamburger--spin ${
                    isOpen ? "is-active" : ""
                  }`}
                >
                  {/* <FontAwesomeIcon icon={faBars} className={styles.iconStyle} /> */}
                  <span className="hamburger-box">
                    <span
                      className={`${"hamburger-inner hamburger-inner-dark"}`}
                    ></span>
                  </span>
                </button>
              </div>
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

          {/* <div className={`${styles.hamburgerBtn}`}>
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
          </div> */}

          <div className={`${styles.navEnd}`}>
            <div className={`${styles.navProfile}`}>
              <div
                className={`${styles.searchBtn}`}
                onClick={() => setOpen(!open)}
                ref={profileRef}
              >
                {currentUser.authenticated &&
                currentUser?.userData?.profile?.picture ? (
                  <div className={`${styles.pixStyle}`}>
                    <img
                      src={`http://localhost:4040/${currentUser?.userData?.profile?.picture}`}
                      alt=""
                    />
                  </div>
                ) : (
                  <AccountCircleOutlined
                  // className={` iconStyle  ${
                  //   bgChange ? styles.dark : styles.iconStyleLight
                  // }`}
                  />
                )}
              </div>
              {open && (
                <div ref={menuRef} className={`${styles.profileContainer}`}>
                  <ul className={`${styles.profileDropdown}`}>
                    {currentUser.authenticated && (
                      <li onClick={() => setOpen(false)}>
                        <NavLink
                          className={`${styles.forDrop} ${
                            fullPath === "/about/who-we-are"
                              ? styles.activeDrop
                              : ""
                          }`}
                          to="/user/profile/3"
                        >
                          Profile
                        </NavLink>
                      </li>
                    )}
                    {!currentUser.authenticated && (
                      <li onClick={() => setOpen(false)}>
                        <NavLink
                          className={`${styles.forDrop}`}
                          to="/auth/register"
                        >
                          Register
                        </NavLink>
                      </li>
                    )}
                    {!currentUser.authenticated && (
                      <li onClick={() => setOpen(false)}>
                        <NavLink
                          className={`${styles.forDrop}`}
                          to="/auth/login"
                        >
                          Login
                        </NavLink>
                      </li>
                    )}
                    {currentUser.authenticated && (
                      <li>
                        <div
                          className={`${styles.forDrop}`}
                          onClick={() => handleLogout()}
                        >
                          Logout
                        </div>
                      </li>
                    )}
                  </ul>
                </div>
              )}
            </div>
            {/* This is for the second icon */}
            <div className={`${styles.navSearch}`}>
              <div className={`${styles.searchBtn}`}>
                <FavoriteBorder
                // className={` iconStyle  ${
                //   bgChange ? styles.dark : styles.iconStyleLight
                // }`}
                />
              </div>
            </div>

            <div
              className={`${styles.cartCount}`}
              onClick={() => addProductHandler()}
            >
              <div>{cart?.total_qty ? cart?.total_qty : 0}</div>
              <ShoppingBagOutlined
              // className={` iconStyle  ${
              //   bgChange ? styles.dark : styles.iconStyleLight
              // }`}
              />
            </div>
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
                          <span className={styles.dropTextHead}>Fashion</span>
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
                            Electronics
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
                            Home/Office OEM
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
                            Tech Attire
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
                            Toys & Hobbies
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
                          <span className={styles.dropTextHead}>Blog</span>
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
                  Fashion
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className={styles.dark}>
                  Electronics
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className={styles.dark}>
                  Home/Office OEM
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className={styles.dark}>
                  Toy & Hobbies
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className={styles.dark}>
                  Others
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
