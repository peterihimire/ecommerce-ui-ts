import userReducer from "./UserReducer";
import adminReducer from "./AdminReducer";
import themeReducer from "./ThemeReducer";

const rootReducer = {
  user: userReducer,
  admin: adminReducer,
  theme: themeReducer,
};
export default rootReducer;
