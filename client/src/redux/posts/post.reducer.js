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

const initialState = {
  loading: false,
  error: false,
  data: [],
};

export const postReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_POST_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case GET_POST_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        data: payload,
      };
    }
    case GET_POST_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case CREATE_POST_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case CREATE_POST_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        data: [...state.data, payload],
      };
    }
    case CREATE_POST_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case UPDATE_POST_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case UPDATE_POST_SUCCESS: {
      const id = payload._id;
      const updatedPost = state.data.map((post) => {
        if (post._id === id) {
          return payload;
        }
        return post;
      });
      return {
        ...state,
        loading: false,
        error: false,
        data: updatedPost,
      };
    }
    case UPDATE_POST_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case DELETE_POST_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case DELETE_POST_SUCCESS: {
      const id = payload._id;
      const filteredPost = state.data.map((post) => post._id !== id);
      return {
        ...state,
        loading: false,
        error: false,
        data: filteredPost,
      };
    }
    case DELETE_POST_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    default: {
      return state;
    }
  }
};
