/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "./Redux/action";
import "./UserList.css";
const UserList = ({ setSingleUser, setEdit }) => {
  const dispatch = useDispatch();
  const [userList, setUserList] = useState([]);

  const getAllUsers = async () => {
    const res = await axios.get(
      "https://blue-journalist-bbrpv.ineuron.app:4000/users"
    );
    const result = await res.data.data;
    setUserList(result);
    console.log("data===========", result);
  };
  useEffect(() => {
    getAllUsers();
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
          {userList?.map((data) => {
            return (
              <tr key={data._id}>
                <td> {data.firstName} </td>
                <td> {data.lastName}</td>
                <td>{data.phoneNumber} </td>
                <td> {data.age}</td>
                <td
                  onClick={() => {
                    console.log("edit user", data);
                    setSingleUser(data);
                  }}
                >
                  <button
                    className="edit"
                    onClick={() => {
                      setEdit(true);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="delete"
                    onClick={() => {
                      dispatch(deleteUser(data._id));
                    }}
                  >
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
