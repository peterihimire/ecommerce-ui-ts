import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import Nav from "../nav";
// import Logo from "../../../public/images/logo-light.svg";
// import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link, NavLink, useLocation } from "react-router-dom";
import styles from "./styles.scss";

const DashboardHeader = ({ isOpen, clicked }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  console.log(location.pathname.slice(1));

  const auth = useSelector((state) => {
    return state;
  });
  console.log(auth);
  const { user, admin } = auth;
  console.log(user);
  console.log(admin);

  const [isDropOpen, setDropOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [bgChange, setBgChange] = useState(false);
  const [dashboardType, setDashboardType] = useState(""); // controls the dashboard - value can be admin || user
  const [userData, setUserData] = useState(user?.userData || {});

  const [name, setDashboardName] = useState("");

  // const router = useRouter();
  // console.log(router);

  const dropHandler = (payload) => {
    setDropOpen(payload);
  };

  const userLinks = [
    { title: "Dashboard", link: "dashboard" },
    { title: "Payment History", link: "payment-history" },
    { title: "Documents", link: "documents" },
    // { title: "Logout", link: "logout" },
  ];
  //  console.log(userLinks.link.includes('dashboard'))
  let userLink = userLinks?.filter((link) => {
    console.log(link.link === "dashboard");
    return link.link === location.pathname.slice(1);
    // console.log(link.link.includes('dashboard'));
  });
  // console.log(userLink[0].title);

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

  let adminLink = adminLinks?.filter((link) => {
    console.log(link.link === "dashboard");
    return link.link === location.pathname.slice(1);
  });
  // console.log(adminLink[0].title);

  const userDashlets = [
    {
      // icon: applicantData?.profile_picture ? (
      //   `${applicantData.profile_picture}`
      // ) : (
      //   <AccountCircle style={{ fontSize: 45 }} />
      // ),
      iconStyle: { borderRadius: "50%", objectFit: "cover" },
      label: "",
      data: `${name}`,
    },
    { icon: File, label: "Application No", data: `${userData.app_no}` },
    {
      // icon: Envelope,
      label: "Recovery Email",
      data: `${userData.email}`,
    },
  ];

  const adminDashlets = [
    {
      // icon: studentData?.profile_picture ? (
      //   `${studentData.profile_picture}`
      // ) : (
      //   <AccountCircle style={{ fontSize: 45 }} />
      // ),
      iconStyle: { borderRadius: "50%", objectFit: "cover" },
      label: "",
      data: `${name}`,
    },
    { icon: File, label: "Registration No", data: `3948hjf89e` },
    {
      // icon: Envelope,
      label: "Recovery Email",
      data: `${userData.email}`,
    },
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

  useEffect(() => {
    if (user.authenticated) {
      setDashboardName(`${userData.lastname} ${userData.firstname}`);
    }
  }, [user, userData.firstname, userData.lastname]);
  console.log(userData);
  console.log(name);

  const buttonStyle = [
    "hamburger",
    "hamburger--spring",
    open ? "is-active" : null,
  ];

  useEffect(() => {
    if (!isOpen) {
      setDropOpen(false);
    }
  }, [isOpen]);

  useEffect(
    () => {
      setDropOpen(false);
    },
    [
      // router.pathname
    ]
  );

  useEffect(() => {
    const changeHeaderBg = () => {
      if (window.scrollY >= 40) {
        setBgChange(true);
      } else {
        setBgChange(false);
      }
    };

    window.addEventListener("scroll", changeHeaderBg);

    return () => {
      window.removeEventListener("scroll", changeHeaderBg);
    };
  }, []);

  return (
    <>
      {dashboardType === "admin" ? (
        <header
          className={`dash_headerr`}
          // className={`${styles.dash_header} ${bgChange || isOpen ? styles.bgDark : ""}`}
        >
          <div className={`wrapper`}>
            <div className={`dash_header__notif`}>
              <span>{adminLink[0]?.title}</span>
            </div>

            <div className={`dash_header__actions`}>
              {/* <div className={`profile_img`}>
              <img src="" alt="profile" />
            </div> */}
              <div className={`dropdown_wrapper`}>
                <Link href="/profile">{adminDashlets[0].data}</Link>
              </div>
            </div>
          </div>
        </header>
      ) : (
        <header
          className={`dash_headerr`}
          // className={`dash_header` ${bgChange || isOpen ? `bgDark` : ""}`}
        >
          <div className={`wrapper`}>
            <div className={`dash_header__notif`}>
              <span>{userLink[0]?.title}</span>
            </div>

            <div className={`dash_header__actions`}>
              {/* <div className={`profile_img`}>
              <img src="" alt="profile" />
            </div> */}
              <div className={`dropdown_wrapper`}>
                <Link href="/profile">{userDashlets[0].data}</Link>
              </div>
            </div>
          </div>
        </header>
      )}
    </>
  );
};

export default DashboardHeader;
