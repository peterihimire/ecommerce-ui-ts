import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  ArrowDownward,
  DarkModeOutlined,
  Search,
  PersonOutline,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { WbSunnyOutlined } from "@mui/icons-material";
import useDarkMode from "use-dark-mode";

import "./styles.scss";

const Nav = ({ isOpen }) => {
  const location = useLocation();
  console.log(location);
  console.log(location.pathname.split("/")[1]);
  const fullPath = location.pathname;
  let pathUrl = location.pathname.split("/")[1];

  const darkMode = useDarkMode(false);
  console.log(darkMode);

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
          <NavLink to="/" activeclassname="active" exact="true">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/collections" activeclassname="active">
            Collections
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeclassname="active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeclassname="active">
            Contact
          </NavLink>
        </li>

        {/* <li>
          <NavLink to="/login" activeclassname="active">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/register" activeclassname="active">
            Register
          </NavLink>
        </li> */}
      </ul>
      <div className={`nav-end`}>
        <div className={`hasDrop`}>
          <button
            className={`hasDropBtn`}
            onClick={() => {
              openAbout(!about);
            }}
          >
            {darkMode.value ? (
              <PersonOutline className="toggle-theme-dark" />
            ) : (
              <PersonOutline className="toggle-theme-light" />
            )}
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
          {/* {darkMode.value ? (
            <FontAwesomeIcon icon={faSearch} className={``} />
          ) : (
            <FontAwesomeIcon icon={faSearch} className={``} />
          )} */}

          {darkMode.value ? (
            <Search className="toggle-theme-dark" />
          ) : (
            <Search className="toggle-theme-light" />
          )}
        </div>
        <div className={`cart-count`}>
          <div>21</div>
          {darkMode.value ? (
            <ShoppingCartOutlined className="toggle-theme-dark" />
          ) : (
            <ShoppingCartOutlined className="toggle-theme-light" />
          )}
        </div>

        {/* <div className={`reg-btn`}>
          <Link href="/register">
            <button className="btn-primary  btn-medium">register</button>
          </Link>
        </div> */}
        <div onClick={darkMode.toggle}>
          {darkMode.value ? (
            <WbSunnyOutlined className="toggle-theme-dark" />
          ) : (
            <DarkModeOutlined className="toggle-theme-light" />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
