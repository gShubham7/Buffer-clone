import axios from "axios";
import {
  CREATE_USER_FAILURE,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  DELETE_USER_FAILURE,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
} from "./admin.types";

const token = localStorage.getItem("token");
axios.defaults.headers.common["Authorization"] = token;

export const getUsers = () => async (dispatch) => {
  dispatch({ type: GET_USER_REQUEST });
  try {
    const res = await axios.get(
      `https://mauve-rabbit-gown.cyclic.app/user/all`
    );
    const data = await res.data;
    console.log(data);
    dispatch({ type: GET_USER_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: GET_USER_FAILURE });
  }
};

export const getChannelsPosts = (id) => async (dispatch) => {
  dispatch({ type: GET_USER_REQUEST });
  try {
    const res = await axios.get(
      `https://mauve-rabbit-gown.cyclic.app/user/post/${id}`
    );
    const data = await res.data;
    console.log(data);
    dispatch({ type: GET_USER_SUCCESS, payload: data.post });
  } catch (e) {
    dispatch({ type: GET_USER_FAILURE });
  }
};

export const createPost = (formData) => async (dispatch) => {
  console.log(formData);
  dispatch({ type: CREATE_USER_REQUEST });
  try {
    const res = await axios.post(
      `https://mauve-rabbit-gown.cyclic.app/user/create`,
      formData
    );
    const data = await res.data;
    dispatch({ type: CREATE_USER_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: CREATE_USER_FAILURE });
  }
};

// export const updatePost = (formData, token) => async (dispatch) => {
//   dispatch({ type: UPDATE_USER_REQUEST });
//   try {
//     const headers = {
//       "Content-type": "application/json",
//       Authorization: `${token}`,
//     };
//     const res = await axios.post(`https://mauve-rabbit-gown.cyclic.app/user/edit`, formData, {
//       headers,
//     });
//     const data = await res.data;
//     dispatch({ type: UPDATE_USER_SUCCESS, payload: data });
//   } catch (e) {
//     dispatch({ type: UPDATE_USER_FAILURE });
//   }
// };

export const deleteUser = (_id) => async (dispatch) => {
  console.log(_id);
  dispatch({ type: DELETE_USER_REQUEST });
  try {
    const res = await axios.delete(
      `https://mauve-rabbit-gown.cyclic.app/user/deleteuser/${_id}`
    );
    const data = await res.data;
    dispatch({ type: DELETE_USER_SUCCESS, payload: data });
    return getUsers();
  } catch (e) {
    dispatch({ type: DELETE_USER_FAILURE });
  }
};
