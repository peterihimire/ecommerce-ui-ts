import React, { useState, useEffect } from "react";
import Input from "../../../shared/customInput";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAppDispatch } from "../../../../hooks/useTypedSelector";
import { registerUser } from "../../../../redux/features/users/userSlice";
import { CircularProgress } from "@mui/material";
import { Visibility } from "@mui/icons-material";
import { VisibilityOff } from "@mui/icons-material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "./styles.module.scss";

// Define the shape of formError state
interface FormError {
  email: string;
  password: string;
  confirm_password: string;
}

// Initial state for formError
const initialFormError: FormError = {
  email: "Please enter email field.",
  password: "Please enter password field.",
  confirm_password: "Please enter confirm_password.",
};

const Form: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();
  const from = location?.state?.from?.pathname;
  console.log(from);
  // const [formError, setFormError] = useState();
  const [formError, setFormError] = useState<FormError>(initialFormError);
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

  // const user = useSelector((state) => {
  //   return state;
  // });
  // console.log(user);
  console.log(logging);
  console.log(formError);
  // console.log(loginForm);

  // const { error, loading } = useSelector((state) => {
  //   return {
  //     error: state.auth.error,
  //     loading: state.auth.loading,
  //   };
  // });
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
    confirm_password: Yup.string().required("Required"),
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
            navigate("/");
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
        setFormError(err.data.errors);
      }
    },
  });

  // Clears the post verified error
  useEffect(() => {
    if (formError) {
      const timer = setTimeout(() => {
        setFormError({
          email: "",
          password: "",
          confirm_password: "",
        });
      }, 4000);
      // Cleanup the timeout if the component is unmounted or formError changes
      return () => clearTimeout(timer);
    }
  }, [formError]);

  return (
    <div className={`${styles.regForm}`}>
      <h2>Register Account</h2>

      <form
        onSubmit={formik.handleSubmit}
        // onSubmit={(e) => handleLogin(e)}
      >
        <div className={`${styles.formGroup}`}>
          <Input
            labelText="Enter Email"
            type="email"
            name="email"
            id="email"
            // required
            placeholder="Email"
            value={formik.values.email}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.email && formik.errors.email ? (
            <p className={styles.errorStyle}>{formik.errors.email}</p>
          ) : null}
          {formError.email && (
            <p className={styles.errorStyle}>{formError.email}</p>
          )}
        </div>

        <div className={`${styles.formGroup}`}>
          <Input
            labelText="Enter Password"
            type={visible ? "text" : "password"}
            name="password"
            id="password"
            // required
            placeholder="Password"
            password
            reveal={() => toggleVisibility()}
            passIcon={!visible ? <Visibility /> : <VisibilityOff />}
            value={formik.values.password}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.password && formik.errors.password ? (
            <p className={`${styles.errorStyle}`}>{formik.errors.password}</p>
          ) : null}
          {formError.password && (
            <p className={styles.errorStyle}>{formError.password}</p>
          )}
        </div>

        <div className={`${styles.formGroup}`}>
          <Input
            labelText="Confirm Password"
            type={visible ? "text" : "password"}
            name="confirm_password"
            id="confirm_password"
            // required
            placeholder="Confirm Password"
            password
            reveal={() => toggleVisibility()}
            passIcon={!visible ? <Visibility /> : <VisibilityOff />}
            value={formik.values.confirm_password}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.confirm_password && formik.errors.confirm_password ? (
            <p className={`${styles.errorStyle}`}>
              {formik.errors.confirm_password}
            </p>
          ) : null}
          {formError.confirm_password && (
            <p className={styles.errorStyle}>{formError.confirm_password}</p>
          )}
        </div>

        <div className={`${styles.btnWithError}`}>
          {/* {formError && (
            <p className={styles.errorStyle}>
              {formError.email ||
                formError.password ||
                formError.confirm_password}
            </p>
          )} */}
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
