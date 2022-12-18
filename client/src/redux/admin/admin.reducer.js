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

const initialState = {
  loading: false,
  error: false,
  data: [],
};

export const adminReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USER_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        data: payload,
      };
    }
    case GET_USER_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case CREATE_USER_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case CREATE_USER_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        data: [...state.data, payload],
      };
    }
    case CREATE_USER_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    // case UPDATE_USER_REQUEST: {
    //   return {
    //     ...state,
    //     loading: true,
    //     error: false,
    //   };
    // }
    // case UPDATE_USER_SUCCESS: {
    //   const id = payload._id;
    //   const updatedPost = state.data.map((post) => {
    //     if (post._id === id) {
    //       return payload;
    //     }
    //     return post;
    //   });
    //   return {
    //     ...state,
    //     loading: false,
    //     error: false,
    //     data: updatedPost,
    //   };
    // }
    // case UPDATE_USER_FAILURE: {
    //   return {
    //     ...state,
    //     loading: false,
    //     error: true,
    //   };
    // }
    case DELETE_USER_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case DELETE_USER_SUCCESS: {
      const id = payload._id;
      const filteredPost = state.data.map((post) => post._id !== id);
      return {
        ...state,
        loading: false,
        error: false,
        data: filteredPost,
      };
    }
    case DELETE_USER_FAILURE: {
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
