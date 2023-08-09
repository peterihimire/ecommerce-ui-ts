import * as actionTypes from "../actions/actionTypes";
const darkData = JSON.parse(localStorage.getItem("dark_mode") || false);
console.log(darkData);

const defaultState = {
  darkMode: darkData,
  // darkMode: false,
};

const ThemeReducer = (state = defaultState, action) => {
  console.log(action);

  if (action.type === actionTypes.SET_DARK) {
    return {
      darkMode: !defaultState.darkMode,
    };
  }

  return state;
};
export default ThemeReducer;

// switch (action.type) {
//   case actionTypes.SET_DARK:
//     return { ...state, darkMode: !defaultState.darkMode };

//   default:
//     return state;

// }
