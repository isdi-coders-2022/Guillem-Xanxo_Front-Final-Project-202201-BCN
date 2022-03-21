import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { Login } from "../../interfaces/Login";
import { userLoginAction, userRegisterAction } from "../actions/actionCreators";
import axios from "axios";
import { Usuari } from "../../interfaces/Usuari";
import { toast } from "react-toastify";

export const loginThunk =
  (userData: Login) =>
  async (dispatch: ThunkDispatch<void, unknown, AnyAction>) => {
    const url = `${process.env.REACT_APP_API_URL}usuari/login`;
    const {
      data: { token },
    } = await axios.post(url, userData);

    if (token) {
      localStorage.setItem("tokenKey", token);
      dispatch(userLoginAction(userData));
      toast.success("Usuari correcte");
    } else {
      toast.error("Hi ha hagut algun error");
    }
  };

export const registerThunk =
  (userData: Usuari) =>
  async (dispatch: ThunkDispatch<void, unknown, AnyAction>) => {
    const url = `${process.env.REACT_APP_API_URL}usuari/register`;
    await axios.post(url, userData);
    dispatch(userRegisterAction(userData));
  };
