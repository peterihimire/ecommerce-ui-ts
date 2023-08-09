import * as actionTypes from "./actionTypes";
import adminAPI from "../api/admin";

export const loginStart = (payload) => {
  return {
    type: actionTypes.ADMIN_LOGIN_START,
    payload,
  };
};

export const loginError = (payload) => {
  return {
    type: actionTypes.ADMIN_LOGIN_ERROR,
    payload,
  };
};

export const loginResponse = (payload) => {
  return {
    type: actionTypes.ADMIN_LOGIN_RESPONSE,
    payload,
  };
};

export const logoutResponse = () => {
  return {
    type: actionTypes.ADMIN_LOGOUT_RESPONSE,
  };
};

// login

export const adminLogin = (payload) => {
  return async (dispatch) => {
    dispatch(loginStart(true));

    try {
      const response = await adminAPI.loginAdmin(payload);
      console.log(response);
      // console.log(response.data.accessToken);
      const { data } = response.data;
      localStorage.setItem("ecommerce_admin", JSON.stringify(data));
      await dispatch(loginResponse(data));
      return Promise.resolve(data);
    } catch (err) {
      console.log(err);
      dispatch(loginError(err.response));
      return Promise.reject(err);
    } finally {
      dispatch(loginStart(false));
    }
  };
};

export const adminLogout = () => {
  return async (dispatch) => {
    try {
      const res = await adminAPI.logoutAdmin();
      await dispatch(logoutResponse());
      return Promise.resolve(res.message);
    } catch (error) {
      return Promise.reject(error);
    } finally {
      localStorage.removeItem("ecommerce_admin");
      await dispatch(logoutResponse());
    }
  };
};
