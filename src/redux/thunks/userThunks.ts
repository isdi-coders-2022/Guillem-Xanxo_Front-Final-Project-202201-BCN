import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { Login } from "../../interfaces/Login";
import { userLoginAction, userRegisterAction } from "../actions/actionCreators";
import axios from "axios";
import { Usuari } from "../../interfaces/Usuari";

export const loginThunk =
  (userData: Login) =>
  async (dispatch: ThunkDispatch<void, unknown, AnyAction>) => {
    const url = `${process.env.REACT_APP_API_URL}usuari/login`;
    const {
      data: { token },
    } = await axios.post(url, userData);

    if (token !== undefined) {
      localStorage.setItem("tokenKey", token);
      dispatch(userLoginAction(userData));
    }
  };

export const registerThunk =
  (userData: Usuari) =>
  async (dispatch: ThunkDispatch<void, unknown, AnyAction>) => {
    const url = `${process.env.REACT_APP_API_URL}usuari/register`;
    await axios.post(url, userData);
    dispatch(userRegisterAction(userData));
  };
