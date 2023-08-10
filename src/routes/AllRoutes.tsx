import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector,  } from "react-redux";
import WebsiteLayout from "../layouts/website";

import { HomePage } from "../pages/home";

const AllRoutes = () => {
  const loggedAuth = useSelector((state) => {
    return state;
  });
  console.log(loggedAuth);
  // const { admin, user } = loggedAuth;
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
        </Route>

        <Route path="*" element={<h2>error 404</h2>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
