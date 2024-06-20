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
import { useAppDispatch } from "../../../../hooks/useTypedSelector";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addContact } from "../../../../redux/features/contact/contactSlice";

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

  console.log(logging);

  const formik = useFormik({
    initialValues: {
      fullname: "",
      company: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email Required *"),
      fullname: Yup.string().required("Fullname Required *"),
      company: Yup.string().required("Company Required *"),
      phone: Yup.string().required("Phone Required *"),
      subject: Yup.string().required("Subject Required *"),
      message: Yup.string().required("Message Required *"),
    }),

    onSubmit: async (values, { resetForm }) => {
      console.log(values);
      setLogging(true);
      try {
        const response = await dispatch(addContact(values));
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
          resetForm();
          setTimeout(() => {
            navigate("/contact");
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
                  labelText="Full Name"
                  type="text"
                  name="fullname"
                  id="fullname"
                  // required
                  placeholder="Full Name"
                  // value={loginForm.email}
                  // onChange={(e) => handleFormChange(e.target)}

                  value={formik.values.fullname}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                {formik.touched.fullname && formik.errors.fullname ? (
                  <p className={`error-msg`}>{formik.errors.fullname}</p>
                ) : null}

                {/* {formError.email && (
            <p className={styles.errorStyle}>{formError.email}</p>
          )} */}
              </div>
              <div className={`${styles.formGroup}`}>
                <Input
                  labelText="Company"
                  type="text"
                  name="company"
                  id="company"
                  // required
                  placeholder="Company"
                  // value={loginForm.password}
                  // onChange={(e) => handleFormChange(e.target)}
                  // password
                  // reveal={() => toggleVisibility()}
                  // passIcon={!visible ? <Visibility /> : <VisibilityOff />}
                  value={formik.values.company}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                />
                {formik.touched.company && formik.errors.company ? (
                  <p className={`error-msg`}>{formik.errors.company}</p>
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
                  // required
                  placeholder="Email"
                  // value={loginForm.email}
                  // onChange={(e) => handleFormChange(e.target)}

                  value={formik.values.email}
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
                  // required
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
              <Input
                labelText="Subject"
                type="text"
                name="subject"
                id="subject"
                // required
                placeholder="Subject"
                // value={loginForm.email}
                // onChange={(e) => handleFormChange(e.target)}

                value={formik.values.subject}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.touched.subject && formik.errors.subject ? (
                <p className="error-msg">{formik.errors.subject}</p>
              ) : null}
            </div>
            {/* <div className={`${styles.formGroup}`}>
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
            </div> */}
            <div className={`${styles.textarea}`}>
              <Textarea
                labelText="Message"
                id="message"
                // required
                name="message"
                placeholder="Type your message..."
                // iconSrc={textPen}
                value={formik.values.message}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
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
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Form;
