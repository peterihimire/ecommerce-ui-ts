import * as actionTypes from "./actionTypes";

export const darkStart = () => {
  return {
    type: actionTypes.SET_DARK,
  };
};

// export const toggleDark = () => {
//   return (dispatch) => {
//     // localStorage.setItem("dark_mode", JSON.stringify(false));
//     dispatch(darkStart(true));
//     // try {
//     //   await dispatch(darkStart(true));
//     // } catch (error) {
//     //   console.log(error);
//     // }
//   };
// };
