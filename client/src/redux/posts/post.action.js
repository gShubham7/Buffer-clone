import axios from "axios";
import {
  CREATE_POST_FAILURE,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  DELETE_POST_FAILURE,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  GET_POST_FAILURE,
  GET_POST_REQUEST,
  GET_POST_SUCCESS,
  UPDATE_POST_FAILURE,
  UPDATE_POST_REQUEST,
  UPDATE_POST_SUCCESS,
} from "./post.types";

export const getPosts = () => async (dispatch) => {
  dispatch({ type: GET_POST_REQUEST });
  try {
    const res = await axios.get(`http://localhost:8080/user/posts`);
    const data = await res.data;
    dispatch({ type: GET_POST_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: GET_POST_FAILURE });
  }
};

export const createPost = (formData, channel, token) => async (dispatch) => {
  console.log(formData);
  dispatch({ type: CREATE_POST_REQUEST });
  try {
    const headers = {
      "Content-type": "application/json",
      Authorization: `${token}`,
    };
    // const res = await axios.post(
    //   `http://localhost:8080/user/create`,
    //   formData,
    //   { headers }
    // );
    // const data = await res.data;
    // dispatch({ type: CREATE_POST_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: CREATE_POST_FAILURE });
  }
};

export const updatePost = (formData, token) => async (dispatch) => {
  dispatch({ type: UPDATE_POST_REQUEST });
  try {
    const headers = {
      "Content-type": "application/json",
      Authorization: `${token}`,
    };
    const res = await axios.post(`http://localhost:8080/user/edit`, formData, {
      headers,
    });
    const data = await res.data;
    dispatch({ type: UPDATE_POST_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: UPDATE_POST_FAILURE });
  }
};

export const deletePost = (id, token) => async (dispatch) => {
  dispatch({ type: DELETE_POST_REQUEST });
  try {
    const headers = {
      "Content-type": "application/json",
      Authorization: `${token}`,
    };
    const res = await axios.post(`http://localhost:8080/user/delete`, id, {
      headers,
    });
    const data = await res.data;
    dispatch({ type: DELETE_POST_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: DELETE_POST_FAILURE });
  }
};
