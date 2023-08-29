import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  ArrowDownward,
  DarkModeOutlined,
  Search,
  PersonOutline,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { NavProps } from "../../../types/NavProps.type";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
// import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
// import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
// import { WbSunnyOutlined } from "@mui/icons-material";
// import useDarkMode from "use-dark-mode-ts";

import "./styles.scss";

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

  useEffect(() => {
    openAbout(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isOpen) {
      openAbout(false);
    }
  }, [isOpen]);

  return (
    <nav className={`nav ${isOpen ? "show" : ""}`} id="navbar">
      <ul className="navLinks">
        <li>
          <NavLink to="/" className={`${bgChange ? "dark" : ""}`}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/collections" className={`${bgChange ? "dark" : ""}`}>
            Collections
          </NavLink>
        </li>
        <li className={`hasDrop`}>
          <div
            className={`hasDropBtn ${bgChange ? "dark" : ""}`}
            onClick={() => {
              openAbout(!about);
            }}
          >
            <span
              className={`${fullPath.includes("about") ? "active" : ""} ${
                bgChange ? "dark" : ""
              }`}
            >
              ABOUT
            </span>
            <FontAwesomeIcon
              icon={faChevronDown}
              className={`${fullPath.includes("about") ? "active" : ""} ${
                bgChange ? "dark" : ""
              }`}
            />
          </div>

          <div className={`dropdownMenu dropResources ${about ? "show" : ""}`}>
            <div className={`dropdownContainer`}>
              <ul className={`dropdownWrapper`}>
                <li>
                  <NavLink className={`forDrop`} to="/about/who-we-are">
                    Who we are
                  </NavLink>
                </li>
                <li>
                  <NavLink className={`forDrop`} to="/about/our-vision">
                    Our Vision
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <NavLink to="/contact" className={`${bgChange ? "dark" : ""}`}>
            Contact
          </NavLink>
        </li>
      </ul>

      <div className={`nav-end`}>
        <div className={`search-btn`}>
          <PersonOutline
            className={`${bgChange ? "dark" : "toggle-theme-light"}`}
          />
        </div>
        <div className={`search-btn`}>
          <Search className={`${bgChange ? "dark" : "toggle-theme-light"}`} />
        </div>
        <div className={`cart-count`}>
          <div>21</div>
          <ShoppingCartOutlined
            className={`${bgChange ? "dark" : "toggle-theme-light"}`}
          />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
