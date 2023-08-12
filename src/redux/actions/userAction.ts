import * as actionTypes from "./actionTypes";
import userAPI from "../api/user";

// REGISTER
export const registerStart = (payload) => {
  return {
    type: actionTypes.USER_REGISTER_START,
    payload,
  };
};

export const registerError = (payload) => {
  return {
    type: actionTypes.USER_REGISTER_ERROR,
    payload,
  };
};

export const registerResponse = (payload) => {
  return {
    type: actionTypes.USER_REGISTER_RESPONSE,
    payload,
  };
};

// VERIFY
export const verifyStart = (payload) => {
  return {
    type: actionTypes.USER_VERIFY_START,
    payload,
  };
};

export const verifyError = (payload) => {
  return {
    type: actionTypes.USER_VERIFY_ERROR,
    payload,
  };
};

export const verifyResponse = (payload) => {
  return {
    type: actionTypes.USER_VERIFY_RESPONSE,
    payload,
  };
};

// INFO
export const infoStart = (payload) => {
  return {
    type: actionTypes.USER_INFO_START,
    payload,
  };
};

export const infoError = (payload) => {
  return {
    type: actionTypes.USER_INFO_ERROR,
    payload,
  };
};

export const infoResponse = (payload) => {
  return {
    type: actionTypes.USER_INFO_RESPONSE,
    payload,
  };
};

// LOGIN
export const loginStart = (payload) => {
  return {
    type: actionTypes.USER_LOGIN_START,
    payload,
  };
};

export const loginError = (payload) => {
  return {
    type: actionTypes.USER_LOGIN_ERROR,
    payload,
  };
};

export const loginResponse = (payload) => {
  return {
    type: actionTypes.USER_LOGIN_RESPONSE,
    payload,
  };
};

// LOGOUT
export const logoutResponse = () => {
  return {
    type: actionTypes.USER_LOGOUT_RESPONSE,
  };
};

// register

export const register = (payload) => {
  return async (dispatch) => {
    dispatch(registerStart(true));

    try {
      const response = await userAPI.registerUser(payload);
      console.log(response);
      // console.log(response.data.accessToken);
      const { data } = response.data;
      // localStorage.setItem("ecommerce_user", JSON.stringify(data));
      // await dispatch(registerResponse(data));
      return Promise.resolve(data);
    } catch (err) {
      console.log(err);
      // dispatch(loginError(err.response));
      return Promise.reject(err);
    } finally {
      dispatch(registerStart(false));
    }
  };
};

// verify

export const verify = (payload) => {
  return async (dispatch) => {
    dispatch(verifyStart(true));

    try {
      const response = await userAPI.verifyUser(payload);
      console.log(response);
      // console.log(response.data.accessToken);
      const { data } = response.data;
      localStorage.setItem("ecommerce_user", JSON.stringify(data));
      // await dispatch(verifyResponse(data));
      await dispatch(loginResponse(data));
      return Promise.resolve(data);
    } catch (err) {
      console.log(err);
      // dispatch(loginError(err.response));
      return Promise.reject(err);
    } finally {
      dispatch(verifyStart(false));
    }
  };
};

// login

export const login = (payload) => {
  return async (dispatch) => {
    dispatch(loginStart(true));

    try {
      const response = await userAPI.loginUser(payload);
      console.log(response);
      // console.log(response.data.accessToken);
      const { data } = response.data;
      console.log(data);
      localStorage.setItem("ecommerce_user", JSON.stringify(data));
      await dispatch(loginResponse(data));
      return Promise.resolve(data);
    } catch (err) {
      console.log(err);
      // dispatch(loginError(err.response));
      return Promise.reject(err);
    } finally {
      dispatch(loginStart(false));
    }
  };
};

// user info

export const userInfo = () => {
  return async (dispatch) => {
    dispatch(infoStart(true));

    try {
      const response = await userAPI.getUserInfo();
      console.log(response);
      // console.log(response.data.accessToken);

      const userdata = JSON.parse(
        localStorage.getItem("ecommerce_user") || "{}"
      );
      const { data } = response.data;
      console.log(userdata);
      console.log(data);
      const newData = { ...userdata, ...{ data } };
      console.log(newData);

      localStorage.setItem("ecommerce_user", JSON.stringify(newData));

      await dispatch(infoResponse(newData));
      return Promise.resolve(newData);
    } catch (err) {
      console.log(err);
      // dispatch(loginError(err.response));
      return Promise.reject(err);
    } finally {
      dispatch(infoStart(false));
    }
  };
};

// logout

export const logout = () => {
  return async (dispatch) => {
    try {
      const res = await userAPI.logoutUser();
      return Promise.resolve(res.message);
    } catch (error) {
      return Promise.reject(error);
    } finally {
      localStorage.removeItem("ecommerce_user");
      await dispatch(logoutResponse());
    }
  };
};
