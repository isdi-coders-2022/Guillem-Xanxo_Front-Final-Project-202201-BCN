import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { Login } from "../../interfaces/Login";
import { userLoginAction } from "../actions/actionCreators";
import axios from "axios";

export const loginThunk =
  (userData: Login) =>
  async (dispatch: ThunkDispatch<void, unknown, AnyAction>) => {
    const url = `${process.env.REACT_APP_API_URL}usuari/login`;
    const {
      data: { token },
    } = await axios.post(url, userData);

    localStorage.setItem("tokenKey", token);
    dispatch(userLoginAction(userData));
  };
