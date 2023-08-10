import * as actionTypes from "../actions/actionTypes";
const adminData = JSON.parse(localStorage.getItem("ecommerce_admin"));

const defaultState = {
  authenticated: !!adminData,
  adminData: adminData,
  loading: false,
  error: null,
  response: {},
};
const AdminReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.ADMIN_LOGIN_RESPONSE:
      return { ...state, authenticated: true, adminData: action.payload };
    case actionTypes.ADMIN_LOGIN_START:
      return {
        ...state,
        loading: action.payload,
      };
    case actionTypes.ADMIN_LOGIN_RESPONSE:
      return {
        ...state,
        response: action.payload,
      };
    case actionTypes.ADMIN_LOGIN_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default AdminReducer;
