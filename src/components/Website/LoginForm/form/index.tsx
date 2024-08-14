import React, { useState, useEffect } from "react";
import Input from "../../../shared/customInput";
import Checkbox from "../../../shared/customCheckbox";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
// import * as actions from "../../../../redux/actions/userAction";
// import { login } from "../../../../redux/actions/userAction";
// import { useSelector, useDispatch } from "react-redux";
import googleGLogo from "../../../../assets/images/google-g-logo.svg";
import { CircularProgress } from "@mui/material";
import { Visibility } from "@mui/icons-material";
import { VisibilityOff } from "@mui/icons-material";
import { Google } from "@mui/icons-material";
import { Facebook } from "@mui/icons-material";
import { useAppDispatch } from "../../../../hooks/useTypedSelector";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  loginUser,
  authGoogle,
} from "../../../../redux/features/auth/authSlice";

import styles from "./styles.module.scss";

const Form: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();
  const from = location?.state?.from?.pathname;

  console.log(from);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  // const handleGoogleAuth = async () => {
  //   setLoading(false);
  //   try {
  //     await dispatch(authGoogle());
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:4040/api/ecommerce/v1/auth/google";
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email Required *"),
      password: Yup.string().required("Password Required *"),
    }),

    onSubmit: async (values) => {
      console.log(values);

      setLoading(true);
      try {
        const response = await dispatch(loginUser(values));
        console.log("This is user login value", response);
        if (response.payload.status === "success") {
          toast.success(`${response.payload.msg}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });

          setLoading(false);
          // setTimeout(() => {
          //   navigate("/collections");
          // }, 3000);

          navigate("/");
        } else {
          toast.error(response.payload, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setLoading(false);
        }
      } catch (err) {
        console.log(err);
        // setFormError(err.data.errors);
      } finally {
        setLoading(false);
      }
    },
  });

  // Clears the post verified error
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError("");
      }, 4000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  // useEffect(() => {
  //   const handleGoogleAuth = async () => {
  //     const queryParams = new URLSearchParams(location.search);
  //     const userParam = queryParams.get("user");

  //     console.log("This is user params...", userParam);

  //     if (userParam) {
  //       try {
  //         const user = JSON.parse(decodeURIComponent(userParam));

  //         console.log("This is user from google ...", user);

  //         localStorage.setItem("ecommerce_user", JSON.stringify(user));
  //         const resultAction = await dispatch(authGoogle());

  //         if (authGoogle.fulfilled.match(resultAction)) {
  //           console.log("Google Auth successful:", resultAction.payload);
  //           navigate("/users/profile/3");
  //         } else {
  //           console.log("Google Auth failed:", resultAction.payload);
  //           navigate("/login");
  //         }
  //       } catch (error) {
  //         console.error("Error during Google Auth dispatch:", error);
  //         navigate("/login");
  //       }
  //     }
  //   };

  //   handleGoogleAuth();
  // }, [dispatch, location, navigate]);

  // // Clears the post verified error
  // useEffect(() => {
  //   if (formError) {
  //     setTimeout(() => {
  //       setFormError({
  //         email: "",
  //         password: "",
  //       });
  //     }, 4000);
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [formError]);

  return (
    <div className={`${styles.loginForm}`}>
      <div className={`${styles.formHeading}`}>
        <h2>welcome back !</h2>
        <p>Login to your benkih account to access wide range of services </p>
      </div>

      <form
        onSubmit={formik.handleSubmit}
        // onSubmit={(e) => handleLogin(e)}
      >
        <div className={`${styles.formGroup}`}>
          <Input
            labelText="Email"
            type="email"
            name="email"
            id="email"
            // required
            placeholder="Enter Email"
            // value={loginForm.email}
            // onChange={(e) => handleFormChange(e.target)}

            value={formik.values.email}
            // onBlur={(e: FocusEvent<HTMLInputElement>) => formik.handleBlur(e)}
            // onChange={(e: ChangeEvent<HTMLInputElement>) =>
            //   formik.handleChange(e)
            // }
            // onBlur={(e: FocusEvent<HTMLInputElement>) => formik.handleBlur(e)}
            // onChange={(e) => formik.handleChange(e)}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.email && formik.errors.email ? (
            <p className={`error-msg`}>{formik.errors.email}</p>
          ) : null}

          {/* {formError.email && (
            <p className={styles.errorStyle}>{formError.email}</p>
          )} */}
        </div>
        <div className={`${styles.formGroup}`}>
          <Input
            labelText="Password"
            type={visible ? "text" : "password"}
            name="password"
            id="password"
            // required
            placeholder="Enter Password"
            // value={loginForm.password}
            // onChange={(e) => handleFormChange(e.target)}
            password
            reveal={() => toggleVisibility()}
            passIcon={!visible ? <VisibilityOff /> : <Visibility />}
            value={formik.values.password}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.password && formik.errors.password ? (
            <p className={`error-msg`}>{formik.errors.password}</p>
          ) : null}
          {/* {formError.password && (
            <p className={styles.errorStyle}>{formError.password}</p>
          )} */}
        </div>
        <div className={`${styles.checkboxGroup}`}>
          <Checkbox
            // checkText={"Silver"}
            htmlFor="save"
            name="save"
            // onChange={handleCheckChange}
          />
          <p>Remember me</p>
        </div>
        <div className={`${styles.forgot}`}>
          <Link to="/auth/forgot_password" className={styles.linkStyle}>
            Forgot Password?
          </Link>
        </div>
        <div className={`${styles.btnWithError}`}>
          {error && <p className={`error-msg`}>*{error}</p>}
          <div className={`${styles.submitBtn}`}>
            <button
              className="btn-primary  btn-block"
              type="submit"
              disabled={loading}
              onClick={(e) => {
                // e.preventDefault();
                // console.log("Clicked");
                // router.push("/dashboard");
              }}
            >
              {/* Send */}
              {/* {loading && "Loading..."}
            {!loading && <div>Send</div>} */}
              {loading ? (
                <CircularProgress size={20} style={{ color: "#fff" }} />
              ) : (
                "Log in"
              )}
            </button>
          </div>
        </div>

        <div className={styles.register}>
          <span>New to Benkih?</span>
          <Link to="/auth/register" className={styles.linkStyle}>
            Create Account
          </Link>
        </div>
        {/* <div className={styles.orStyle}>
          <span>OR</span>
        </div> */}
        <div className={styles.continueWrapper}>
          <div className={styles.continue} onClick={handleGoogleLogin}>
            <span>
              <img src={googleGLogo} alt="" />
            </span>
            Continue with Google
          </div>

          {/* <div className={styles.continue}>
            <span>
              <Facebook />
            </span>
            Continue with Facebook
          </div> */}
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Form;
// http://127.0.0.1:4040/api/ecommerce/v1/auth/google/callback/?code=4%2F0AcvDMrDl17qK6YW0a6j6QNV-yvsp6gHigwCJ-Z8oFz4tOkHL9uNaGYDzUD8z74eaS5wasQ&scope=email+profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+openid&authuser=0&prompt=none
