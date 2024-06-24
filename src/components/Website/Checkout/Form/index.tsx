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
      firstname: "",
      lastname: "",
      company: "",
      phone: "",
      email: "",
      state: "",
      street: "",
      apartment_no: "",
      city: "",
      order_note: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email Required *"),
      firstname: Yup.string().required("Firstname Required *"),
      lastname: Yup.string().required("Lastname Required *"),
      company: Yup.string(),
      phone: Yup.string().required("Phone Required *"),
      state: Yup.string().required("State Required *"),
      street: Yup.string().required("Street Required *"),
      city: Yup.string().required("City Required *"),
      apartment_no: Yup.string(),
      order_note: Yup.string(),
    }),

    onSubmit: async (values, { resetForm }) => {
      console.log(values);
      setLogging(true);
      try {
        // const response = await dispatch(addContact(values));
        // console.log("This is user login value", response);
        // if (response.payload.status === "success") {
        //   toast.success(`${response.payload.msg}`, {
        //     position: "top-right",
        //     autoClose: 5000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //     theme: "light",
        //   });
        //   setLogging(false);
        //   resetForm();
        //   setTimeout(() => {
        //     navigate("/contact");
        //   }, 3000);
        //   // navigate("/");
        // } else {
        //   toast.error(response.payload.msg, {
        //     position: "top-right",
        //     autoClose: 5000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //   });
        //   setLogging(false);
        // }
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

  return (
    <div className={`${styles.orderForm}`}>
      <div className={`${styles.checkoutHeader}`}>
        <h4>Billing details</h4>
      </div>

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
                // required
                placeholder="First Name"
                // value={loginForm.email}
                // onChange={(e) => handleFormChange(e.target)}

                value={formik.values.firstname}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.touched.firstname && formik.errors.firstname ? (
                <p className={`error-msg`}>{formik.errors.firstname}</p>
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
                // required
                placeholder="Last Name"
                // value={loginForm.email}
                // onChange={(e) => handleFormChange(e.target)}

                value={formik.values.lastname}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.touched.lastname && formik.errors.lastname ? (
                <p className={`error-msg`}>{formik.errors.lastname}</p>
              ) : null}

              {/* {formError.email && (
            <p className={styles.errorStyle}>{formError.email}</p>
          )} */}
            </div>
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
            <Input
              labelText="Company (Optional)"
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
          <div className={`${styles.formGroup}`}>
            <Input
              labelText="Street"
              type="text"
              name="street"
              id="street"
              // required
              placeholder="Street"
              // value={loginForm.email}
              // onChange={(e) => handleFormChange(e.target)}

              value={formik.values.street}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.street && formik.errors.street ? (
              <p className="error-msg">{formik.errors.street}</p>
            ) : null}
          </div>
          <div className={`${styles.formGroup}`}>
            <Select
              name="state"
              labelText="State of Residence"
              // required
              id="state"
              defaultValue=""
            >
              <option disabled value="">
                Select one
              </option>
              <option value="nig">Abia</option>
              <option value="gh">Imo</option>
              <option value="sa">Edo</option>
            </Select>
            {/* {formik.touched.state && formik.errors.state ? (
                <p className="error-msg">{formik.errors.state}</p>
              ) : null} */}
          </div>
          <div className={`${styles.textarea}`}>
            <Textarea
              labelText="Order Notes (optional)"
              id="order-note"
              // required
              name="order note"
              placeholder="Enter your order note"
              // iconSrc={textPen}
              value={formik.values.order_note}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.order_note && formik.errors.order_note ? (
              <p className="error-msg">{formik.errors.order_note}</p>
            ) : null}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
