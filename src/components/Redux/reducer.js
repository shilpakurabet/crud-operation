/** @format */

import {
  CREATE_USER,
  DELETE_USER,
  GET_ALL_USERS,
  UPDATE_USER,
} from "./constants";

const initialState = {
  getAllUsers: [],
  createUsers: [],
  updateUsers: [],
  deleteUsers: [],
};
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USERS: {
      return {
        ...state,
        getAllUsers: action.payload,
      };
    }
    case CREATE_USER: {
      return {
        ...state,
        createUsers: action.payload,
      };
    }
    case UPDATE_USER: {
      return {
        ...state,
        updateUsers: action.payload,
      };
    }
    case DELETE_USER: {
      return {
        ...state,
        deleteUsers: action.payload,
      };
    }
    default:
      return state;
  }
};

export default Reducer;
