import React, { useEffect } from "react";
// import { useDispatch } from "react-redux";
import { useAppDispatch } from "../../../hooks/useTypedSelector";
import { useLocation, useNavigate } from "react-router-dom";
import { getUserInfo } from "../../../redux/features/users/userSlice"; // Update the path as needed
import { authGoogle } from "../../../redux/features/auth/authSlice";

const GoogleAuthCallback: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleGoogleAuth = async () => {
      const queryParams = new URLSearchParams(location.search);
      const userParam = queryParams.get("user");

      if (userParam) {
        try {
          const user = JSON.parse(decodeURIComponent(userParam));
          await dispatch(authGoogle(user)); // Save user data to local storage

          // const resultAction = await dispatch(getUserInfo()); // Fetch user info

          console.log("User from google...", user);

          // if (getUserInfo.fulfilled.match(resultAction)) {
          //   console.log("Google Auth successful:", resultAction.payload);
          //   if (location.state?.from) {
          //     // Redirect to the original page before login prompt
          //     navigate(location.state.from);
          //   } else if (user.isNewUser) {
          //     // Redirect new users to profile setup
          //     navigate("/profile/setup");
          //   } else {
          //     // Redirect returning users to account dashboard or homepage
          //     navigate("/account/dashboard");
          //   }
          // } else {
          //   console.log("Google Auth failed:", resultAction.payload);
          //   navigate("/login");
          // }
        } catch (error) {
          console.error("Error during Google Auth dispatch:", error);
          navigate("/login");
        }
      }
    };

    handleGoogleAuth();
  }, [dispatch, location, navigate]);

  return null; // or a loading indicator
};

export default GoogleAuthCallback;
