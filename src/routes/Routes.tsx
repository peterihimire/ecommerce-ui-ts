import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RootState } from "../redux/store.config";
import { useAppSelector } from "../hooks/useTypedSelector";
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
import { GoogleAuth } from "../pages/googleAuth";
import { PageNotFound } from "../pages/pageNotFound";
import ProtectedRoutes from "../hoc/ProtectedRoutes";
import RenderTop from "../utils/RenderTop";

const AllRoutes = () => {
  const currentUser = useAppSelector((state: RootState) => state.auth);

  return (
    <BrowserRouter>
      <RenderTop />
      <Routes>
        <Route element={<WebsiteLayout />}>
          <Route path="/" index={true} element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/collections/:prod_id" element={<ProductInfo />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/auth/google/callback" element={<GoogleAuth />} />

          <Route
            path="/checkout"
            element={
              <ProtectedRoutes isAllowed={!!currentUser.authenticated}>
                <Checkout />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/user/profile/:acct_id"
            element={
              <ProtectedRoutes isAllowed={!!currentUser.authenticated}>
                <Profile />
              </ProtectedRoutes>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/auth/login" element={<LoginForm />} />
          <Route path="/auth/register" element={<RegisterForm />} />
          <Route path="/auth/verify_email" element={<VerifyForm />} />
          <Route path="/auth/forgot_password" element={<ForgotForm />} />
          <Route path="/auth/change_password" element={<PasswordForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
