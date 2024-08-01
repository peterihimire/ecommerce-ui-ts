// src/utils/axiosInterceptors.ts
import { AxiosInstance } from "axios";
import { logoutUser } from "../redux/features/auth/authSlice";
import { AppDispatch } from "../redux/store"; // Import your AppDispatch type

// Utility function to add interceptors
export function setupAxiosInterceptors(axiosInstance: AxiosInstance) {
  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response && error.response.status === 401) {
        // Token expired or unauthorized, dispatch logout action
        console.log(
          "Action reaching here............../////////////............/////////"
        );
        const dispatch: AppDispatch = (window as any).__REDUX_STORE__.dispatch;
        dispatch(logoutUser());
      }
      return Promise.reject(error);
    }
  );
}
