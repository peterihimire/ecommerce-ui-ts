import React, { useState, useEffect } from "react";
import Input from "../../../shared/customInput";
import Textarea from "../../../shared/customTextarea";
import Checkbox from "../../../shared/customCheckbox";
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
import { RootState } from "../../../../redux/store";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../hooks/useTypedSelector";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addContact } from "../../../../redux/features/contact/contactSlice";
import StarRate from "../../../shared/starRate";

import styles from "./styles.module.scss";

const Form: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();
  const from = location?.state?.from?.pathname;
  console.log(from);

  const [logging, setLogging] = useState(false);
  const [error, setError] = useState("");
  const [rating, setRating] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);

  const productReview = useAppSelector(
    (state: RootState) => state.product.productData
  );
  console.log("This is current product review ...", productReview);

  console.log(logging);
  console.log("Yeah, rating buddy...:", rating);

  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      review: "",
      rating: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email Required *"),
      fullname: Yup.string().required("Fullname Required *"),
      review: Yup.string().required("Review Required *"),
      rating: Yup.number().required("Rating Required *"),
    }),

    onSubmit: async (values, { resetForm }) => {
      console.log(values);

      const payload = {
        fullname: "",
        company: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
        rating: rating,
      };
      setLogging(true);
      try {
        const response = await dispatch(addContact(payload));
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

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };

  return (
    <div className={`${styles.reviewForm}`}>
      <div className={`${styles.initial}`}>
        {productReview?.reviews?.length === 0 && (
          <p className={styles.small}>There are no reviews yet.</p>
        )}
        {productReview?.reviews?.length === 0 && (
          <p className={styles.big}>Be the first to review “RAYBAN SHADES”</p>
        )}
        <p className={styles.small}>
          Your email address will not be published.
        </p>
      </div>
      <div className={`${styles.starRate}`}>
        <div className={`${styles.content}`}>
          <p>Your rating</p>
          <StarRate onRatingChange={handleRatingChange} />
        </div>
        {rating === null && formik.errors.rating ? (
          <p className="error-msg">{formik.errors.rating}</p>
        ) : null}
      </div>
      <div className={`${styles.formContainer}`}>
        <form
          onSubmit={formik.handleSubmit}
          // onSubmit={(e) => handleLogin(e)}
        >
          <div className={`${styles.textarea}`}>
            <Textarea
              labelText="Your review"
              id="review"
              // required
              name="review"
              placeholder="Type your review..."
              // iconSrc={textPen}
              value={formik.values.review}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.review && formik.errors.review ? (
              <p className="error-msg">{formik.errors.review}</p>
            ) : null}
          </div>
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
          </div>

          <div className={`${styles.checkboxGroup}`}>
            <Checkbox
              // checkText={"Silver"}
              htmlFor="save"
              name="save"
              // onChange={handleCheckChange}
            />
            <p>
              Save my name, email, and website in this browser for the next time
              I comment.
            </p>
          </div>

          <div className={`btnWithError`}>
            {error && <p className={`errorStyle`}>*{error}</p>}
            <div className={`submitBtn`}>
              <button
                className="btn-primary  btn-small"
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
                  "Submit"
                )}
              </button>
            </div>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Form;
