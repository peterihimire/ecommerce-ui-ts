import React, { useState, useEffect } from "react";
import "./styles.scss";
import Input from "../../../ui/customInput";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
// import * as actions from "../../../../redux/actions/userAction";
import { login } from "../../../../redux/actions/userAction";
import { useSelector, useDispatch } from "react-redux";
import { CircularProgress } from "@mui/material";
import { Visibility } from "@mui/icons-material";
import { VisibilityOff } from "@mui/icons-material";

const Form = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname;
  console.log(from);
  const dispatch = useDispatch();
  // console.log(dispatch);
  // console.log(
  //   dispatch(
  //     userLogin({ email: "peterihimire@gmail.com", password: "password" })
  //   )
  // );
  // const [showModal, setShowModal] = useState(false);

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
    // checked: true,
  });
  // const [showPassword, setShowPassword] = useState(false);
  const [formError, setFormError] = useState({
    email: "Please enter email field.",
    password: "Please enter password field.",
  });
  const [logging, setLogging] = useState(false);
  const [error, setError] = useState("");
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  // const handleFormChange = ({ name, value }) => {
  //   setFormError("");
  //   setLoginForm({ ...loginForm, [name]: value });
  // };

  const user = useSelector((state) => {
    return state;
  });
  console.log(user);
  console.log(logging);
  // console.log(formError);
  // console.log(loginForm);

  // const { error, loading } = useSelector((state) => {
  //   return {
  //     error: state.auth.error,
  //     loading: state.auth.loading,
  //   };
  // });

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
      // dispatch(actions.login({ ...values }));
      // // dispatch(userLogin({ ...values }));
      // // dispatch(actions.login({ ...values, resetForm }));

      // setFormError("");
      setLogging(true);
      try {
        const user = await dispatch(login(values));
        console.log(user);
        navigate("/dashboard", { user });
      } catch (err) {
        console.log(err);
        setError(err.data.data);
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

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   setFormError("");
  //   setLogging(true);
  //   try {
  //     const user = await dispatch(login(loginForm));
  //     console.log(user);
  //     navigate("/dashboard", { user });
  //     // navigate(from, { replace: true });
  //     // const user = await applicantLogin(loginForm);
  //     // await getApplicantData();
  //     // if (user.applicant.completed) {
  //     //   history.push("/applicant/dashboard");
  //     // } else {
  //     //   history.push("/applicant/personal-information", {
  //     //     application_state: user.applicant.application_state,
  //     //   });
  //     // }
  //   } catch (err) {
  //     console.log(err);
  //     setFormError(err.data.errors);
  //   } finally {
  //     setLogging(false);
  //   }
  // };

  return (
    <div className={`login-form`}>
      <h2>Login your Account</h2>

      <form
        onSubmit={formik.handleSubmit}
        // onSubmit={(e) => handleLogin(e)}
      >
        <div className={`formGroup`}>
          <Input
            labelText="Enter Email"
            type="email"
            name="email"
            id="email"
            required
            placeholder="Email"
            // value={loginForm.email}
            // onChange={(e) => handleFormChange(e.target)}

            value={formik.values.email}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.email && formik.errors.email ? (
            <p className={`errorStyle`}>{formik.errors.email}</p>
          ) : null}

          {/* {formError.email && (
            <p className={styles.errorStyle}>{formError.email}</p>
          )} */}
        </div>
        <div className={`formGroup`}>
          <Input
            labelText="Enter Password"
            type={visible ? "text" : "password"}
            name="password"
            id="password"
            required
            placeholder="Password"
            // value={loginForm.password}
            // onChange={(e) => handleFormChange(e.target)}
            password
            reveal={() => toggleVisibility()}
            passIcon={!visible ? <Visibility /> : <VisibilityOff />}
            value={formik.values.password}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.password && formik.errors.password ? (
            <p className={`errorStyle`}>{formik.errors.password}</p>
          ) : null}
          {/* {formError.password && (
            <p className={styles.errorStyle}>{formError.password}</p>
          )} */}
        </div>
        <div className={`forgot`}>
          {/* <Link href='/forgot-password'>
            <a className={`linkStyle`}>Forgot Password?</a>
          </Link> */}
        </div>
        <div className={`btnWithError`}>
          {error && <p className={`errorStyle`}>*{error}</p>}
          <div className={`submitBtn`}>
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
                "Login"
              )}
            </button>
          </div>
        </div>

        {/* <div className={`register`}>
          <span>Don't have an account? </span>
          <Link href='/register'>
            <a className={styles.linkStyle}>Register</a>
          </Link>
        </div> */}
      </form>
    </div>
  );
};

export default Form;
