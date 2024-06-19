import { RouteObject } from "react-router-dom";
import WebsiteLayout from "../layouts/website";
import AuthLayout from "../layouts/auth";
import { Home } from "../pages/home";
import { About } from "../pages/about";
import { Contact } from "../pages/contact";
import { Collections } from "../pages/collections";
import { LoginForm } from "../pages/loginform";
import { RegisterForm } from "../pages/registerform";
import { ProductInfo } from "../pages/productinfo";
import { Faq } from "../pages/faq";
import { Profile } from "../pages/profile";
import { VerifyForm } from "../pages/verifyform";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <WebsiteLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about/who-we-are",
        element: <About />,
      },
      {
        path: "/about/who-we-are",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/collections",
        element: <Collections />,
      },
      {
        path: "/collections/:prod_id",
        element: <ProductInfo />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/user/profile/:acct_id",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <LoginForm />,
      },
      {
        path: "/auth/register",
        element: <RegisterForm />,
      },
      {
        path: "/auth/verify_email",
        element: <VerifyForm />,
      },
    ],
  },

  { path: "*", element: <h2>error 404</h2> },
];
