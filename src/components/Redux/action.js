/** @format */

import axios from "axios";
import { CREATE_USER, DELETE_USER,UPDATE_USER } from "./constants";

export const createUsers = (data) => {
  console.log("data",data);
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "https://blue-journalist-bbrpv.ineuron.app:4000/user/create",
        data
      );
      const result = await response.data;
      dispatch({ type: CREATE_USER, payload: result });
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
    } catch (error) {
      console.log(error);
    }
  };
};
