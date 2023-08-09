import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import WebsiteLayout from "../layouts/website";
import AuthLayout from "../layouts/auth";
import DashboardLayout from "../layouts/dashboard";
// import DashboardSettingsLayout from "../layouts/dashboardSettings";
import { HomePage } from "../pages/home";
import { ContactPage } from "../pages/contactUs";
import { CartPage } from "../pages/cart";
import { CollectionItemPage } from "../pages/collectionItem";
import { CollectionsPage } from "../pages/collections";
import { LoginPage } from "../pages/login";
import { RegisterPage } from "../pages/register";
import { VerifyPage } from "../pages/verify";
// import { AdminLogin } from "../pages/adminLogin";

import { DashPage } from "../pages/dashboard";
import { AdminDash } from "../pages/adminDash";
import ProtectedRoutes from "../hoc/ProtectedRoutes";

const AllRoutes = () => {
  const loggedAuth = useSelector((state) => {
    return state;
  });
  console.log(loggedAuth);
  const { admin, user } = loggedAuth;
  const [adminAuth, setAdminAuth] = useState(loggedAuth?.admin);
  const [userAuth, setUserAuth] = useState(loggedAuth?.user);
  //  console.log(loggedAuth);
  console.log(adminAuth);
  console.log(userAuth);

  return (
    <BrowserRouter>
      <Routes>
        {/* WEBSITE LAYOUT */}
        <Route element={<WebsiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="collections" element={<CollectionsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="cart/:cId" element={<CartPage />} />
          <Route path="collections/:pId" element={<CollectionItemPage />} />
        </Route>

        {/* LOGIN LAYOUT */}
        <Route element={<AuthLayout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="verify/:token" element={<VerifyPage />} />
          {/* <Route path="/admin/login" element={<AdminLogin />} /> */}
        </Route>

        {/* DASHBOARD LAYOUT */}
        <Route element={<DashboardLayout />}>
          <Route
            path="/dashboard"
            element={
              <ProtectedRoutes
                isAllowed={
                  !!user.authenticated
                  // && user.userData.isAdmin
                }
                redirectPath="/login"
              >
                <AdminDash />
              </ProtectedRoutes>
            }
          />
        </Route>

        {/* <Route element={<DashboardSettingsLayout />}>
          <Route
            path="/admin/dashboard/setting"
            element={
              <ProtectedRoutes
                isAllowed={
                  !!admin.authenticated && admin.hasOwnProperty("adminData")
                }
                redirectPath="/admin/login"
              >
                <AdminDash />
              </ProtectedRoutes>
            }
          />
        </Route> */}

        <Route path="*" element={<h2>error 404</h2>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
