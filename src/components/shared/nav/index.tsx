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
import Input from "../../shared/customInput";
import BackdropCart from "../../shared/backdropcart";
import { logoutUser } from "../../../redux/features/auth/authSlice";
import { RootState } from "../../../redux/store";
import {
  useAppSelector,
  useAppDispatch,
} from "../../../hooks/useTypedSelector";
import { useNavigate } from "react-router-dom";
// import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
// import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
// import { WbSunnyOutlined } from "@mui/icons-material";
// import useDarkMode from "use-dark-mode-ts";
import styles from "./styles.module.scss";

const Nav: React.FC<NavProps> = ({ isOpen, bgChange }: NavProps) => {
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector((state: RootState) => state.user);
  console.log("This is current user ...", currentUser);
  console.log(location.pathname.split("/")[1]);
  const fullPath = location.pathname;
  let pathUrl = location.pathname.split("/")[1];
  console.log("This is path-url...", pathUrl);

  // const darkMode = useDarkMode(false);
  // console.log(darkMode);

  const [about, openAbout] = useState(false);
  const [open, setOpen] = useState(false);
  const [openBar, setOpenBar] = useState(false);
  console.log("This is open", open);

  const profileRef = useRef<HTMLDivElement>(null); // Proper initialization
  const menuRef = useRef<HTMLDivElement>(null); // Proper initialization

  const searchRef = useRef<HTMLDivElement>(null); // Proper initialization
  const barRef = useRef<HTMLDivElement>(null); // Proper initialization
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

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      barRef.current &&
      !barRef.current.contains(event.target as Node) &&
      searchRef.current &&
      !searchRef.current.contains(event.target as Node)
    ) {
      setOpenBar(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleLogout = async () => {
    try {
      await dispatch(logoutUser());
      navigate("/auth/login"); // Navigate to login page after logout
    } catch (error) {
      console.error("Logout error:", error);
      // Handle error if needed
    }
  };

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
                    <NavLink className={`${styles.forDrop}`} to="/auth/login">
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
          <div
            className={`${styles.searchBtn}`}
            onClick={() => setOpenBar(!openBar)}
            ref={searchRef}
          >
            <Search
              className={` iconStyle  ${
                bgChange ? styles.dark : styles.iconStyleLight
              }`}
            />
          </div>
          {openBar && (
            <div ref={barRef} className={`${styles.barContainer}`}>
              <div className={`${styles.bar}`}>
                <Input
                  // labelText="Search"
                  type="text"
                  name="search"
                  id="search"
                  // required
                  placeholder="Search"
                  // value={loginForm.email}
                  // onChange={(e) => handleFormChange(e.target)}

                  // value={formik.values.email}
                  // onBlur={formik.handleBlur}
                  // onChange={formik.handleChange}
                />
              </div>
            </div>
          )}
        </div>

        <div
          className={`${styles.cartCount}`}
          onClick={() => addProductHandler()}
        >
          <div>21</div>
          <ShoppingBagOutlined
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
