import React, { useState, useEffect } from "react";
import Input from "../../../shared/customInput";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAppDispatch } from "../../../../hooks/useTypedSelector";
import { registerUser } from "../../../../redux/features/auth/authSlice";
import { CircularProgress } from "@mui/material";
import { Visibility } from "@mui/icons-material";
import { VisibilityOff } from "@mui/icons-material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "./styles.module.scss";

const Form: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();
  const from = location?.state?.from?.pathname;
  console.log(from);
  // const [formError, setFormError] = useState();
  // const [formError, setFormError] = useState<FormError>(initialFormError);
  const [logging, setLogging] = useState(false);
  const [error, setError] = useState("");
  const [visible, setVisible] = useState(false);
  const [visibleSec, setVisibleSec] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  const toggleVisibilitySec = () => {
    setVisibleSec(!visibleSec);
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email Required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(
        /^(?=.*[a-z])/,
        "Password must contain at least one lowercase letter"
      )
      .matches(
        /^(?=.*[A-Z])/,
        "Password must contain at least one uppercase letter"
      )
      .matches(/^(?=.*\d)/, "Password must contain at least one number")
      .matches(
        /^(?=.*[@$!%*?&])/,
        "Password must contain at least one special character"
      )
      .required("Password Required"),
    confirm_password: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Password Required"),
    // password: Yup.string().required("Required"),
    // confirm_password: Yup.string().required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirm_password: "",
    },

    validationSchema: validationSchema,

    onSubmit: async (values) => {
      setLogging(true);
      console.log("This is the register value", values);
      const { email, password } = values;
      const payload = {
        email,
        password,
      };
      console.log("Hey payload...", payload);

      try {
        const response = await dispatch(registerUser(payload));
        console.log("This is user return value", response);
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

          setLogging(false);
          setTimeout(() => {
            navigate("/auth/verify_email");
          }, 3000);
        } else {
          toast.error(response.payload.msg, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setLogging(false);
        }
      } catch (err: any) {
        console.log("Will this error log...", err);
        setLogging(false);
        setError(err.data.errors);
      } finally {
        setLogging(false);
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

  return (
    <div className={`${styles.regForm}`}>
      <h2>Register Account</h2>

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
            value={formik.values.email}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.email && formik.errors.email ? (
            <p className={`error-msg`}>{formik.errors.email}</p>
          ) : null}
        </div>

        <div className={`${styles.formGroup}`}>
          <Input
            labelText="Password"
            type={visible ? "text" : "password"}
            name="password"
            id="password"
            // required
            placeholder="Enter Password"
            password
            reveal={() => toggleVisibility()}
            passIcon={!visible ? <Visibility /> : <VisibilityOff />}
            value={formik.values.password}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.password && formik.errors.password ? (
            <p className={`error-msg`}>{formik.errors.password}</p>
          ) : null}
        </div>

        <div className={`${styles.formGroup}`}>
          <Input
            labelText="Confirm Password"
            type={visibleSec ? "text" : "password"}
            name="confirm_password"
            id="confirm_password"
            // required
            placeholder="Enter Confirm Password"
            password
            reveal={() => toggleVisibilitySec()}
            passIcon={!visibleSec ? <Visibility /> : <VisibilityOff />}
            value={formik.values.confirm_password}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.confirm_password && formik.errors.confirm_password ? (
            <p className={`error-msg`}>{formik.errors.confirm_password}</p>
          ) : null}
        </div>

        <div className={`${styles.btnWithError}`}>
          <div className={`${styles.submitBtn}`}>
            <button
              className="btn-primary  btn-block"
              type="submit"
              disabled={logging}
              onClick={(e) => {
                // e.preventDefault();
                // console.log("Clicked");
                // router.push("/dashboard");
              }}
            >
              {logging ? (
                <CircularProgress size={20} style={{ color: "#fff" }} />
              ) : (
                "Register"
              )}
            </button>
          </div>
        </div>

        <div className={styles.loginLink}>
          <span>Have an account? </span>
          <Link to="/auth/login" className={styles.linkStyle}>
            Login
          </Link>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Form;
