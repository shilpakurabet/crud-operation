/** @format */

import { CREATE_USER, DELETE_USER, UPDATE_USER } from "./constants";

const initialState = {
  createUsers: [],
  updateUsers: [],
  deleteUsers: [],
};
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER: {
      return {
        ...state,
        getAllUsers: action.payload,
      };
    }
    case UPDATE_USER: {
      return {
        ...state,
        getAllUsers: action.payload,
      };
    }
    case DELETE_USER: {
      return {
        ...state,
        getAllUsers: action.payload,
      };
    }
    default:
      return state;
  }
};

export default Reducer;
