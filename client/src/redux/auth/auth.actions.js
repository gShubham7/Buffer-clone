import axios from "axios";
import {
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./auth.types";

export const login = (creds) => async (dispatch) => {
  console.log(creds);
  dispatch({ type: LOGIN_REQUEST });
  try {
    let res = await axios.post("http://localhost:8080/auth/login", creds);
    localStorage.setItem("email", creds.email);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data });

    return res.data;
  } catch (error) {
    dispatch({ type: LOGIN_ERROR, payload: error.message });
  }
};

export const ActionLogout = () => ({ type: LOGOUT });
