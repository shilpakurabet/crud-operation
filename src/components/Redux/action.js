/** @format */

import axios from "axios";
import {
  CREATE_USER,
  DELETE_USER,
  GET_ALL_USERS,
  UPDATE_USER,
} from "./constants";

export const getAllUsers = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://blue-journalist-bbrpv.ineuron.app:4000/users"
      );
      const result = await response.data;
      dispatch({ type: GET_ALL_USERS, payload: result });
    } catch (error) {
      console.log(error);
    }
  };
};
export const createUsers = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "https://blue-journalist-bbrpv.ineuron.app:4000/user/create",
        data
      );
      const result = await response.data;

      dispatch({ type: CREATE_USER, payload: result });
      dispatch(getAllUsers());
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateUsers = (id, data) => {
  return async (dispatch) => {
    try {
      const response = await axios.patch(
        ` https://blue-journalist-bbrpv.ineuron.app:4000/user/${id}`,
        data
      );
      const result = await response.data;
      dispatch({ type: UPDATE_USER, payload: result });
      dispatch(getAllUsers());
    } catch (error) {
      console.log(error);
    }
  };
};
export const deleteUser = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(
        ` https://blue-journalist-bbrpv.ineuron.app:4000/user/${id}`
      );
      const result = await response.data;
      dispatch({ type: DELETE_USER, payload: result });
      dispatch(getAllUsers());
    } catch (error) {
      console.log(error);
    }
  };
};
