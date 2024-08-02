import { AxiosInstance } from "axios";
import { logoutUser } from "../redux/features/auth/authSlice";
import { AppDispatch } from "../redux/store.config"; // Import your AppDispatch type

// Utility function to add interceptors
export function setupAxiosInterceptors(
  axiosInstance: AxiosInstance,
  dispatch: AppDispatch
) {
  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (
        (error.response && error.response.status === 401) ||
        error?.response?.data?.message === "Unauthenticated."
      ) {
        console.log("Action reaching here...");
        localStorage.removeItem("ecommerce_user");

        dispatch(logoutUser())
          .unwrap()
          .catch((dispatchError) => {
            console.error("Error dispatching logoutUser:", dispatchError);
          });

        // window.location.href = "/auth/login";
      }
      return Promise.reject(error);
    }
  );
}
