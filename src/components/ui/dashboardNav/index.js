import React, { useState, useEffect } from "react";
import { useNavigate, Link, NavLink, useLocation } from "react-router-dom";
import { login, logout } from "../../../redux/actions/userAction";
import { adminLogout } from "../../../redux/actions/adminAction";
import Accordion from "../accordion";

import { useSelector, useDispatch } from "react-redux";
// import * as actions from "../../../store/actions";
import { DarkModeOutlined } from "@mui/icons-material";
import { WbSunnyOutlined } from "@mui/icons-material";
import useDarkMode from "use-dark-mode";

import "./styles.scss";

const DashboardNav = ({ isOpen, bgChange }) => {
  const darkMode = useDarkMode(false);
  console.log(darkMode);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const auth = useSelector((state) => {
    return state;
  });
  console.log(auth);
  const { user } = auth;
  console.log(user);

  const [loggingOut, setLoggingOut] = useState(false);
  const [dashboardType, setDashboardType] = useState(""); // controls the dashboard - value can be admin | applicant | student

  const [userData, setUserData] = useState(user?.userData || {});
  // console.log(studentData);
  const [name, setDashboardName] = useState("");

  const userLinks = [
    { title: "Dashboard", link: "dashboard" },
    { title: "Payment History", link: "payment-history" },
    { title: "Documents", link: "documents" },
    // { title: "Logout", link: "logout" },
  ];

  // const userLinks = [
  //   {
  //     title: "Dashboard",
  //     content: ["smart-sms", "delivery-report", "phone-group"],
  //   },
  //   {
  //     title: "Payment History",
  //     content: [
  //       "dashboard",
  //       "sms",
  //       "smart-sms",
  //       "delivery-report",
  //       "phone-group",
  //     ],
  //   },
  //   {
  //     title: "Documents",
  //     content: ["dashboard", "sms", "smart-sms"],
  //   },
  //   // { title: "Logout", link: "logout" },
  // ];

  const adminLinks = [
    { title: "Dashboard", link: "dashboard" },
    { title: "My Profile", link: "my-profile" },
    { title: "My Courses", link: "my-courses" },
    { title: "My Documents", link: "my-documents" },
    { title: "My Results", link: "my-results" },
    { title: "My Wallet", link: "my-wallet" },
    { title: "Exam", link: "exam" },
    { title: "My Fees", link: "my-fees" },
    { title: "Support", link: "support" },
    // { title: "Logout", link: "logout" },
  ];

  useEffect(() => {
    if (user?.userData) {
      setUserData(user?.userData);
    }
  }, [user]);

 

  useEffect(() => {
    // setDashboardType(type);
    if (user?.authenticated && user?.userData?.isAdmin === false) {
      setDashboardType("user");
    } else if (user?.authenticated && user?.userData?.isAdmin === true) {
      setDashboardType("admin");
    }
  }, [
    // type,
    user?.authenticated,
    user?.userData?.isAdmin,
  ]);

  const goto = (url) => {
    navigate(`/${dashboardType}/${url}`);
  };

  const getActive = (link) => {
    const lnk = location.pathname.endsWith("/")
      ? location.pathname.slice(0, -1)
      : location.pathname;
    return lnk === `/${dashboardType}/${link}` ||
      location.pathname.includes(link)
      ? true
      : false;
  };

  const getLinks = () => {
    switch (dashboardType) {
      case "admin":
        return adminLinks;
      case "user":
        return userLinks;
      default:
        return [];
    }
  };
  console.log(dashboardType);

  useEffect(() => {
    if (user.authenticated) {
      setDashboardName(`${userData.lastname} ${userData.firstname}`);
    }
  }, [user, userData.firstname, userData.lastname]);

  const handleLogout = async () => {
    // console.log(applicant, admin);
    try {
      if (auth.user.authenticated) {
        await dispatch(logout());
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoggingOut(false);
    }
  };

  const crowdInvest = "/crowd-invest";
  const orderConfirmation = "/order-confirmation";
  return (
    <nav className={`${`navSide`} ${isOpen ? `show` : ""}`}>
      <div className={`logo`}></div>
      <ul className={`navLinks`}>
        {getLinks().map((link, index) => {
          return (
            <NavLink
              key={index}
              className={`dashLink`}
              to={dashboardType === "admin" ? `${link.link}` : `/${link.link}`}
            >
              <span>{link.title}</span>
            </NavLink>
          );
        })}
        <li></li>
        <li onClick={darkMode.toggle}>
          {darkMode.value ? (
            <WbSunnyOutlined className="toggle-theme-dark" />
          ) : (
            <DarkModeOutlined className="toggle-theme-light" />
          )}
        </li>
      </ul>

      <a>
        <div className={`attention`}></div>
      </a>

      <div className={`navLogout`}>
        <button
          onClick={() => {
            handleLogout();
          }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default DashboardNav;
