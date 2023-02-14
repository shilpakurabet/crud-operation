/** @format */

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getAllUsers } from "./Redux/action";
import "./UserList.css";
const UserList = ({ setSingleUser, setEdit }) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.Reducer.getAllUsers);
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);
  return (
    <div>
      <table className="table">
        <thead className="tableHeader">
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>phoneNumber</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="tableBody">
          {data?.data?.map((data) => {
            return (
              <tr key={data._id}>
                <td> {data.firstName} </td>
                <td> {data.lastName}</td>
                <td>{data.phoneNumber} </td>
                <td> {data.age}</td>
                <td
                  onClick={() => {
                    setSingleUser(data);
                  }}>
                  <button
                    className="edit"
                    onClick={() => {
                      setEdit(true);
                    }}>
                    Edit
                  </button>
                  <button
                    className="delete"
                    onClick={() => {
                      dispatch(deleteUser(data._id));
                      alert(`User deleted successfully...`);
                    }}>
                    {" "}
                    Delete{" "}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
