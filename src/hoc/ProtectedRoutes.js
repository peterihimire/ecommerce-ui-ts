import React, { useState, useEffect } from "react";
import { useNavigate, Navigate, useLocation, Outlet } from "react-router-dom";

const ProtectedRoutes = ({ isAllowed, redirectPath = "/login", children }) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoutes;
