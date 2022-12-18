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

const token = localStorage.getItem("token");
axios.defaults.headers.common["Authorization"] = token;

export const getPosts = () => async (dispatch) => {
  dispatch({ type: GET_POST_REQUEST });
  try {
    const res = await axios.post(
      `https://mauve-rabbit-gown.cyclic.app/user/profile`
    );
    const data = await res.data;
    dispatch({ type: GET_POST_SUCCESS, payload: data.posts });
  } catch (e) {
    dispatch({ type: GET_POST_FAILURE });
  }
};

export const getChannelsPosts = (id) => async (dispatch) => {
  dispatch({ type: GET_POST_REQUEST });
  try {
    const res = await axios.get(
      `https://mauve-rabbit-gown.cyclic.app/user/post/${id}`
    );
    const data = await res.data;
    console.log(data);
    dispatch({ type: GET_POST_SUCCESS, payload: data.post });
  } catch (e) {
    dispatch({ type: GET_POST_FAILURE });
  }
};

export const createPost = (formData) => async (dispatch) => {
  console.log(formData);
  dispatch({ type: CREATE_POST_REQUEST });
  try {
    const res = await axios.post(
      `https://mauve-rabbit-gown.cyclic.app/user/create`,
      formData
    );
    const data = await res.data;
    dispatch({ type: CREATE_POST_SUCCESS, payload: data });
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
    const res = await axios.post(
      `https://mauve-rabbit-gown.cyclic.app/user/edit`,
      formData,
      {
        headers,
      }
    );
    const data = await res.data;
    dispatch({ type: UPDATE_POST_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: UPDATE_POST_FAILURE });
  }
};

export const deletePost = (_id, channel) => async (dispatch) => {
  console.log(channel)
  dispatch({ type: DELETE_POST_REQUEST });
  try {
    const res = await axios.delete(
      `https://mauve-rabbit-gown.cyclic.app/user/delete/${channel}/${_id}`
    );
    const data = await res.data;
    dispatch({ type: DELETE_POST_SUCCESS, payload: data });
    return getChannelsPosts(channel);
  } catch (e) {
    dispatch({ type: DELETE_POST_FAILURE });
  }
};
