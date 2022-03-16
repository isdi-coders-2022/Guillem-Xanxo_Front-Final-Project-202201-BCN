import { userLogininterfaceAction } from "../../interfaces/Action";
import { Login } from "../../interfaces/Login";
import actionTypes from "../actions/actionTypes";

const userReducer = (
  currentUser: Login = { usuari: "", contrassenya: "" },
  action: userLogininterfaceAction
) => {
  let loggedInUser: Login;

  switch (action.type) {
    case actionTypes.userLogin:
      loggedInUser = action.user;
      break;

    default:
      loggedInUser = { ...currentUser };
      break;
  }

  return loggedInUser;
};

export default userReducer;
