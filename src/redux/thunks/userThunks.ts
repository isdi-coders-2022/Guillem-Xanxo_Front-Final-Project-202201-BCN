import jwtDecode from "jwt-decode";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { Login } from "../../interfaces/Login";

export const loginThunk =
  (userData: Login) =>
  async (dispatch: ThunkDispatch<void, unknown, AnyAction>) => {
    const { token },
    } = await fetch(`${process.env.REACT_APP_API_URL}usuari/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    localStorage.setItem("tokenKey", token);
  };
