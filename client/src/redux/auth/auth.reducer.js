import {
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./auth.types";

let LocalToken = localStorage.getItem("token");
const check =
  LocalToken !== undefined && LocalToken !== null && LocalToken !== "";
const email = localStorage.getItem("email");
const checkAdminAuth = email == "admin@gmail.com";
console.log(checkAdminAuth)
const initialState = {
  token: { token: LocalToken },
  isAuth: check,
  loading: false,
  error: false,
  AdminIsAuth: checkAdminAuth,
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case LOGIN_SUCCESS: {
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        isAuth: true,
        token: payload,
        loading: false,
        error: false,
        AdminIsAuth: checkAdminAuth,
      };
    }
    case LOGIN_ERROR: {
      // localStorage.setItem("token", payload);
      return {
        ...state,
        loading: false,
        error: true,
        errorMessage: payload,
      };
    }
    case LOGOUT: {
      localStorage.removeItem("token");
      localStorage.removeItem("email");
      return {
        ...state,
        isAuth: false,
        token: "",
        AdminIsAuth: false,
      };
    }
    default: {
      return state;
    }
  }
};
