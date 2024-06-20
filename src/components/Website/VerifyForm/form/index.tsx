import React, { useState, useEffect } from "react";
import Input from "../../../shared/customInput";
import { useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CircularProgress } from "@mui/material";
import { useAppDispatch } from "../../../../hooks/useTypedSelector";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { verifyEmail } from "../../../../redux/features/users/userSlice";

import styles from "./styles.module.scss";

const Form: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();
  const from = location?.state?.from?.pathname;
  console.log(from);

  const [formError, setFormError] = useState({
    otp: "Please enter OTP code.",
  });
  const [logging, setLogging] = useState(false);
  const [error, setError] = useState("");

  console.log(logging);

  const formik = useFormik({
    initialValues: {
      otp: "",
    },

    validationSchema: Yup.object({
      otp: Yup.string()
        .length(4, "OTP code must be exactly 4 characters")
        .matches(/^\d{4}$/, "OTP code must contain only numbers")
        .required("OTP Required *"),
      // otp: Yup.number()
      //   .max(4, "OTP code must be at least 4 characters")
      //   .required("OTP Required *"),
    }),

    onSubmit: async (values) => {
      console.log(values);

      setLogging(true);
      try {
        const response = await dispatch(
          verifyEmail({ otp: Number(values.otp) })
        );
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
            navigate("/login");
          }, 3000);

          // navigate("/");
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
        console.log(err);
        setError(err.data.errors);
      } finally {
        setLogging(false);
      }
    },
  });

  // // Clears the post verified error
  // useEffect(() => {
  //   if (formError) {
  //     setTimeout(() => {
  //       setFormError({
  //         otp: "",
  //       });
  //     }, 4000);
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [formError]);

  return (
    <div className={`${styles.loginForm}`}>
      <h2>Verify Your Email</h2>

      <form
        onSubmit={formik.handleSubmit}
        // onSubmit={(e) => handleLogin(e)}
      >
        <div className={`${styles.formGroup}`}>
          <Input
            labelText="OTP Code"
            type="number"
            name="otp"
            id="otp"
            // required
            placeholder="Enter OTP"
            value={formik.values.otp}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            // onChange={(e) =>
            //   formik.setFieldValue("otp", Number(e.target.value))
            // }
          />
          {formik.touched.otp && formik.errors.otp ? (
            <p className={`error-msg`}>{formik.errors.otp}</p>
          ) : null}

          {/* {formError.email && (
            <p className={styles.errorStyle}>{formError.email}</p>
          )} */}
        </div>

        <div className={`${styles.btnWithError}`}>
          {error && <p className={`errorStyle`}>*{error}</p>}
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
                "Verify"
              )}
            </button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Form;
