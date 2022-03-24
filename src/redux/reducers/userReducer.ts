import { userLogininterfaceAction } from "../../interfaces/Action";
import { Login } from "../../interfaces/Login";
import { Usuari } from "../../interfaces/Usuari";
import actionTypes from "../actions/actionTypes";

const userReducer = (
  currentUser: Usuari = { usuari: "", contrassenya: "" },
  action: userLogininterfaceAction = {
    type: "",
    user: { usuari: "", contrassenya: "" },
  }
) => {
  let loggedInUser: Login;

  switch (action.type) {
    case actionTypes.userLogin:
      loggedInUser = { usuari: action.user.usuari, contrassenya: "" };
      break;

    case actionTypes.userRegister:
      loggedInUser = { usuari: "", contrassenya: "" };
      break;

    case actionTypes.cleanUser:
      loggedInUser = { usuari: "", contrassenya: "" };
      break;

    default:
      loggedInUser = { ...currentUser };
      break;
  }

  return loggedInUser;
};

export default userReducer;
