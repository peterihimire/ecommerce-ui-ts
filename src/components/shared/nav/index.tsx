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
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
// import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { WbSunnyOutlined } from "@mui/icons-material";
// import useDarkMode from "use-dark-mode-ts";

import "./styles.scss";

const Nav: React.FC<NavProps> = ({ isOpen }: NavProps) => {
  const location = useLocation();
  console.log(location);
  console.log(location.pathname.split("/")[1]);
  const fullPath = location.pathname;
  let pathUrl = location.pathname.split("/")[1];

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
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/collections">Collections</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>

      <div className={`nav-end`}>
        <div className={`hasDrop`}>
          <button
            className={`hasDropBtn`}
            onClick={() => {
              openAbout(!about);
            }}
          >
            <PersonOutline className="toggle-theme-light" />
          </button>

          <div className={`dropdownMenu dropResources ${about ? "show" : ""}`}>
            <div className={`dropdownContainer`}>
              <ul className={`dropdownWrapper`}>
                <li>
                  <NavLink className={`forDrop`} to="/login">
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink className={`forDrop`} to="/register">
                    Register
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={`search-btn`}>
          <Search className="toggle-theme-light" />
        </div>
        <div className={`cart-count`}>
          <div>21</div>
          <ShoppingCartOutlined className="toggle-theme-light" />
        </div>

        {/* <div className={`reg-btn`}>
          <Link href="/register">
            <button className="btn-primary  btn-medium">register</button>
          </Link>
        </div> */}
        {/* <div>
          <DarkModeOutlined className="toggle-theme-light" />
        </div> */}
      </div>
    </nav>
  );
};

export default Nav;
