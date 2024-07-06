import React, { useState, useEffect } from "react";
import Input from "../../../shared/customInput";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
// import * as actions from "../../../../redux/actions/userAction";
// import { login } from "../../../../redux/actions/userAction";
// import { useSelector, useDispatch } from "react-redux";
import { CircularProgress } from "@mui/material";
import { Visibility } from "@mui/icons-material";
import { VisibilityOff } from "@mui/icons-material";
import { useAppDispatch } from "../../../../hooks/useTypedSelector";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginUser } from "../../../../redux/features/auth/authSlice";

import styles from "./styles.module.scss";

const Form: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();
  const from = location?.state?.from?.pathname;
  console.log(from);

  const [logging, setLogging] = useState(false);
  const [error, setError] = useState("");
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
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

      setLogging(true);
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

          setLogging(false);
          setTimeout(() => {
            navigate("/collections");
          }, 3000);

          // navigate("/");
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
          setLogging(false);
        }
      } catch (err) {
        console.log(err);
        // setFormError(err.data.errors);
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
    <div className={`${styles.loginForm}`}>
      <h2>Forgot Password</h2>

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
            required
            placeholder="Enter Email"
            // value={loginForm.email}
            // onChange={(e) => handleFormChange(e.target)}

            value={formik.values.email}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.email && formik.errors.email ? (
            <p className={`error-msg`}>{formik.errors.email}</p>
          ) : null}
        </div>

        <div className={`${styles.btnWithError}`}>
          {error && <p className={`error-msg`}>*{error}</p>}
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
              {/* Send */}
              {/* {loading && "Loading..."}
            {!loading && <div>Send</div>} */}
              {logging ? (
                <CircularProgress size={20} style={{ color: "#fff" }} />
              ) : (
                "Send"
              )}
            </button>
          </div>
        </div>

        <div className={styles.register}>
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
