import React, { useState, useEffect } from "react";
import Input from "../../../shared/customInput";
import Textarea from "../../../shared/customTextarea";
import Select from "../../../shared/customSelect";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
// import * as actions from "../../../../redux/actions/userAction";
// import { login } from "../../../../redux/actions/userAction";
// import { useSelector, useDispatch } from "react-redux";
import { CircularProgress } from "@mui/material";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import styles from "./styles.module.scss";

const Form = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname;
  console.log(from);
  // const dispatch = useDispatch();
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

  // const user = useSelector((state) => {
  //   return state;
  // });
  // console.log(user);
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
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      country: "",
      message: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email Required *"),
      firstname: Yup.string().required("Firstname Required *"),
      lastname: Yup.string().required("Lastname Required *"),
      phone: Yup.string().required("Phone Required *"),
      message: Yup.string().required("Message Required *"),
    }),

    onSubmit: async (values) => {
      console.log(values);
      // dispatch(actions.login({ ...values }));
      // // dispatch(userLogin({ ...values }));
      // // dispatch(actions.login({ ...values, resetForm }));

      // setFormError("");
      setLogging(true);
      try {
        // const user = await dispatch(login(values));
        // console.log(user);
        // navigate("/dashboard", { user });
      } catch (err) {
        console.log(err);
        // setError(err.data.data);
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
    <div className={`${styles.contactForm}`}>
      {/* <h2>Log into your Account</h2> */}
      <div className="wrapper">
        <div className={`${styles.formContainer}`}>
          <form
            onSubmit={formik.handleSubmit}
            // onSubmit={(e) => handleLogin(e)}
          >
            <div className={`${styles.formGrid}`}>
              <div className={`${styles.formGroup}`}>
                <Input
                  labelText="First Name"
                  type="text"
                  name="firstname"
                  id="firstname"
                  required
                  placeholder="First Name"
                  // value={loginForm.email}
                  // onChange={(e) => handleFormChange(e.target)}

                  value={formik.values.firstname}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                {formik.touched.firstname && formik.errors.firstname ? (
                  <p className={`errorStyle`}>{formik.errors.firstname}</p>
                ) : null}

                {/* {formError.email && (
            <p className={styles.errorStyle}>{formError.email}</p>
          )} */}
              </div>
              <div className={`${styles.formGroup}`}>
                <Input
                  labelText="Last Name"
                  type="text"
                  name="lastname"
                  id="lastname"
                  required
                  placeholder="Last Name"
                  // value={loginForm.password}
                  // onChange={(e) => handleFormChange(e.target)}
                  // password
                  // reveal={() => toggleVisibility()}
                  // passIcon={!visible ? <Visibility /> : <VisibilityOff />}
                  value={formik.values.lastname}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                {formik.touched.lastname && formik.errors.lastname ? (
                  <p className={`errorStyle`}>{formik.errors.lastname}</p>
                ) : null}
                {/* {formError.password && (
            <p className={styles.errorStyle}>{formError.password}</p>
          )} */}
              </div>

              <div className={`${styles.formGroup}`}>
                <Input
                  labelText="Email"
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

              <div className={`${styles.formGroup}`}>
                {/* <div className={`phone-label-wrapper`}>
                <label htmlFor="phone">
                  Phone Number<span>*</span>
                </label>
              </div> */}

                {/* <PhoneInput
                country={"us"}
                // value={this.state.phone}
                // onChange={(phone) => this.setState({ phone })}
                dropdownClass="phone-drop"
                inputClass="phone-input"
                buttonClass="phone-drop-btn"
                placeholder=""
                inputProps={{ id: "phone", name: "phone_number" }}
                containerClass="phone-input-wrapper"
              /> */}
                <Input
                  labelText="Phone"
                  type="phone"
                  name="phone"
                  id="phone"
                  required
                  placeholder="Phone"
                  // value={loginForm.email}
                  // onChange={(e) => handleFormChange(e.target)}

                  value={formik.values.phone}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                {formik.touched.phone && formik.errors.phone ? (
                  <p className="error-msg">{formik.errors.phone}</p>
                ) : null}
              </div>
            </div>
            <div className={`${styles.formGroup}`}>
              <Select
                name="country"
                labelText="Country of Residence"
                required
                id="country"
                defaultValue=""
              >
                <option disabled value="">
                  Select one
                </option>
                <option value="nig">Nigeria</option>
                <option value="gh">Ghana</option>
                <option value="sa">South Africa</option>
              </Select>
              {formik.touched.country && formik.errors.country ? (
                <p className="error-msg">{formik.errors.country}</p>
              ) : null}
            </div>
            <div className={`${styles.textarea}`}>
              <Textarea
                labelText="Message"
                id="message"
                required
                name="message"
                placeholder="Type your message..."
                // iconSrc={textPen}
                onChange={formik.handleChange}
                value={formik.values.message}
                onBlur={formik.handleBlur}
              />
              {formik.touched.message && formik.errors.message ? (
                <p className="error-msg">{formik.errors.message}</p>
              ) : null}
            </div>

            <div className={`forgot`}>
              {/* <Link href='/forgot-password'>
            <a className={styles.linkStyle}>Forgot Password?</a>
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
                    "Send"
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
