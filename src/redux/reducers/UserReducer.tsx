import * as actionTypes from "../actions/actionTypes";
const userData = JSON.parse(localStorage.getItem("ecommerce_user"));

const defaultState = {
  authenticated: !!userData,
  userData: userData,
  loading: false,
  error: null,
  response: {},
};
const UserReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.USER_LOGIN_RESPONSE:
      return { ...state, authenticated: true, userData: action.payload };
    case actionTypes.USER_LOGIN_START:
      return {
        ...state,
        loading: action.payload,
      };
    case actionTypes.USER_INFO_RESPONSE:
      return {
        ...state,
        userData: action.payload,
      };
    case actionTypes.USER_LOGIN_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default UserReducer;
