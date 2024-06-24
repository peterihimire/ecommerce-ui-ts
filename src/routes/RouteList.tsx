import { RouteObject } from "react-router-dom";
import WebsiteLayout from "../layouts/website";
import AuthLayout from "../layouts/auth";
import { Home } from "../pages/home";
import { About } from "../pages/about";
import { Contact } from "../pages/contact";
import { Collections } from "../pages/collections";
import { Cart } from "../pages/cart";
import { Checkout } from "../pages/checkout";
import { LoginForm } from "../pages/loginform";
import { RegisterForm } from "../pages/registerform";
import { ForgotForm } from "../pages/forgotform";
import { PasswordForm } from "../pages/passwordform";
import { ProductInfo } from "../pages/productinfo";
import { Faq } from "../pages/faq";
import { Profile } from "../pages/profile";
import { VerifyForm } from "../pages/verifyform";
import { PageNotFound } from "../pages/pageNotFound";

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
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
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
      {
        path: "/auth/forgot_password",
        element: <ForgotForm />,
      },
      {
        path: "/auth/change_password",
        element: <PasswordForm />,
      },
    ],
  },

  {
    path: "*",
    element: <WebsiteLayout />,
    children: [
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
];
