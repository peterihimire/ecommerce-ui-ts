import React, { useState, useEffect } from "react";
import "./styles.scss";
import Input from "../../../ui/customInput";
import { useLocation, Link, useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
// import * as actions from "../../../../redux/actions/userAction";
import { verify, userInfo } from "../../../../redux/actions/userAction";
import { useSelector, useDispatch } from "react-redux";
import { CircularProgress } from "@mui/material";
import { Visibility } from "@mui/icons-material";
import { VisibilityOff } from "@mui/icons-material";

const Form = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { token } = useParams();
  console.log(token);
  console.log(typeof token);
  console.log(location);
  const from = location?.state?.from?.pathname;
  console.log(from);
  const dispatch = useDispatch();
  // console.log(dispatch);
  // console.log(
  //   dispatch(
  //     userLogin({ email: "peterihimire@gmail.com", password: "password" })
  //   )
  // );

  const [emailToken, setEmailToken] = useState(null);
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
  //   setEmailToken(token);
  //   const verifyHandler = async () => {
  //     try {
  //       const response = await dispatch(verify(emailToken));
  //       console.log(response);
  //       const info = await dispatch(userInfo());
  //       console.log(info);
  //       navigate("/dashboard", { user: "This is YLMBHG" });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   verifyHandler();
  // }, [token, emailToken, dispatch, navigate]);

  useEffect(() => {
    setEmailToken(token);
  }, [token]);

  const handleLogin = async (e) => {
    // e.preventDefault();

    setFormError("");
    setLogging(true);
    try {
      const response = await dispatch(verify(emailToken));
      console.log(response);
      const info = await dispatch(userInfo());
      console.log(info);
      navigate("/dashboard", { user: "This is YLMBHG" });
      // const user = await dispatch(login(loginForm));
      // console.log(user);
      // navigate("/dashboard", { user });
      // navigate(from, { replace: true });
      // const user = await applicantLogin(loginForm);
      // await getApplicantData();
      // if (user.applicant.completed) {
      //   history.push("/applicant/dashboard");
      // } else {
      //   history.push("/applicant/personal-information", {
      //     application_state: user.applicant.application_state,
      //   });
      // }
    } catch (err) {
      console.log(err);
      setFormError(err.data.errors);
    } finally {
      setLogging(false);
    }
  };

  return (
    <div className={`login-form`}>
      <h2>Verify Account</h2>

      <p>Congratulations, your email verification was successful.</p>

      <div className={`btnWithError`}>
        {error && <p className={`errorStyle`}>*{error}</p>}
        <div className={`submitBtn`}>
          <button
            className="btn-primary  btn-block"
            type="submit"
            disabled={logging}
            onClick={(e) => {
              // e.preventDefault();
              handleLogin();
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
              "Proceed"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
