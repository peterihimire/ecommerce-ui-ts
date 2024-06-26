import React, { useEffect, useState, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  ArrowDownward,
  DarkModeOutlined,
  Search,
  PersonOutline,
  ShoppingBagOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { NavProps } from "../../../types/NavProps.type";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import CartNav from "../../shared/cartNav";
import BackdropCart from "../../shared/backdropcart";
// import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
// import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
// import { WbSunnyOutlined } from "@mui/icons-material";
// import useDarkMode from "use-dark-mode-ts";
import styles from "./styles.module.scss";

const Nav: React.FC<NavProps> = ({ isOpen, bgChange }: NavProps) => {
  const location = useLocation();
  console.log(location);
  console.log(location.pathname.split("/")[1]);
  const fullPath = location.pathname;
  let pathUrl = location.pathname.split("/")[1];
  console.log("This is path-url...", pathUrl);

  // const darkMode = useDarkMode(false);
  // console.log(darkMode);

  const [about, openAbout] = useState(false);
  const [open, setOpen] = useState(false);
  console.log("This is open", open);

  const profileRef = useRef<HTMLDivElement>(null); // Proper initialization
  const menuRef = useRef<HTMLDivElement>(null); // Proper initialization
  const [cartOpen, setCartOpen] = useState(false);

  const addProductHandler = () => {
    console.log("Add handler...");
    setCartOpen(true);
    document.documentElement.classList.add("_fixed");
    document.body.classList.add("_fixed");
  };

  useEffect(() => {
    openAbout(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isOpen) {
      openAbout(false);
    }
  }, [isOpen]);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target as Node) &&
      profileRef.current &&
      !profileRef.current.contains(event.target as Node)
    ) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className={`${styles.nav} ${isOpen ? styles.show : ""}`} id="navbar">
      <ul className={`${styles.navLinks}`}>
        <li>
          <NavLink
            to="/"
            className={`${bgChange ? styles.dark : ""} ${
              fullPath === "/" ? styles.active : ""
            }`}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/collections"
            className={`${bgChange ? styles.dark : ""} ${
              fullPath === "/collections" ? styles.active : ""
            }`}
          >
            Collections
          </NavLink>
        </li>
        <li className={`${styles.hasDrop}`}>
          <div
            className={`${styles.hasDropBtn}`}
            onClick={() => {
              openAbout(!about);
            }}
          >
            <span
              className={`${fullPath.includes("about" ? styles.active : "")} ${
                bgChange ? styles.dark : ""
              }`}
            >
              About
            </span>
            <FontAwesomeIcon
              icon={faChevronDown}
              className={`${fullPath.includes("about" ? styles.active : "")} ${
                bgChange ? styles.dark : ""
              }`}
            />
          </div>

          <div
            className={`${styles.dropdownMenu} ${styles.dropResources} ${
              about ? styles.show : ""
            }`}
          >
            <div className={`${styles.dropdownContainer}`}>
              <ul className={`${styles.dropdownWrapper}`}>
                <li>
                  <NavLink
                    className={`${styles.forDrop} ${
                      fullPath === "/about/who-we-are" ? styles.activeDrop : ""
                    }`}
                    to="/about/who-we-are"
                  >
                    Who We Are
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink
                    className={`${styles.forDrop}`}
                    to="/about/our-vision"
                  >
                    Our Vision
                  </NavLink>
                </li> */}
                <li>
                  <NavLink
                    className={`${styles.forDrop} ${
                      fullPath === "/faq" ? styles.activeDrop : ""
                    }`}
                    to="/faq"
                  >
                    FAQ
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </li>

        <li>
          <NavLink
            to="/contact"
            className={`${bgChange ? styles.dark : ""} ${
              fullPath === "/contact" ? styles.active : ""
            }`}
          >
            Contact
          </NavLink>
        </li>
      </ul>

      <div className={`${styles.navEnd}`}>
        <div className={`${styles.navProfile}`}>
          <div
            className={`${styles.searchBtn}`}
            onClick={() => setOpen(!open)}
            ref={profileRef}
          >
            <PersonOutline
              className={` iconStyle  ${
                bgChange ? styles.dark : styles.iconStyleLight
              }`}
            />
          </div>
          {open && (
            <div ref={menuRef} className={`${styles.profileContainer}`}>
              <ul className={`${styles.profileDropdown}`}>
                <li onClick={() => setOpen(false)}>
                  <NavLink
                    className={`${styles.forDrop} ${
                      fullPath === "/about/who-we-are" ? styles.activeDrop : ""
                    }`}
                    to="/user/profile/3"
                  >
                    Profile
                  </NavLink>
                </li>
                <li onClick={() => setOpen(false)}>
                  <NavLink className={`${styles.forDrop}`} to="/auth/register">
                    Register
                  </NavLink>
                </li>
                <li onClick={() => setOpen(false)}>
                  <NavLink className={`${styles.forDrop}`} to="/auth/login">
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={`${styles.forDrop}`}
                    to="/about/our-vision"
                  >
                    Logout
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
        </div>
        {/* This is for the second icon */}
        <div className={`${styles.searchBtn}`}>
          <Search
            className={` iconStyle  ${
              bgChange ? styles.dark : styles.iconStyleLight
            }`}
          />
        </div>
        <div
          className={`${styles.cartCount}`}
          onClick={() => addProductHandler()}
        >
          <div>21</div>
          <ShoppingCartOutlined
            className={` iconStyle  ${
              bgChange ? styles.dark : styles.iconStyleLight
            }`}
          />
        </div>
      </div>

      <CartNav
        isOpen={cartOpen}
        clicked={() => {
          setCartOpen(false);
          document.documentElement.classList.remove("_fixed");
          document.body.classList.remove("_fixed");
        }}
      />
      <BackdropCart
        open={cartOpen}
        clicked={() => {
          setCartOpen(false);
          document.documentElement.classList.remove("_fixed");
          document.body.classList.remove("_fixed");
        }}
      />
    </nav>
  );
};

export default Nav;
