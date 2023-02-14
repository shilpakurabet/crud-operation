/** @format */

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./Form.css";
import { createUsers, updateUsers } from "./Redux/action";
const Form = ({ edit, singleUser }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    age: "",
  });
  const [errorMessage, setErrorMessage] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    age: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    let errorMessage = {};
    if (formData.firstName === "" || formData?.firstName?.length > 25) {
      isValid = false;
      errorMessage.firstName =
        "First name cannot be more than 25 characters long.";
    } else if (formData.lastName === "" || formData.lastName.length > 25) {
      isValid = false;
      errorMessage.lastName =
        "Last name cannot be more than 25 characters long.";
    } else if (formData.phoneNumber.toString().length !== 10) {
      isValid = false;
      errorMessage.phoneNumber = "Phone number must be 10 digits long.";
    } else if (formData.age === "" || formData.age.toString().length > 3) {
      isValid = false;
      errorMessage.age = "Age must be a number with 3 digits or less.";
    }
    if (isValid === true) {
      const data = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        phoneNumber: formData.phoneNumber,
        age: formData.age,
      };
      if (edit) {
        dispatch(updateUsers(singleUser._id, formData));
      } else {
        dispatch(createUsers(data));
      }
      setFormData("");
      setErrorMessage("");
    } else setErrorMessage(errorMessage);
  };
  useEffect(() => {
    if (edit === true) {
      setFormData({
        firstName: singleUser.firstName,
        lastName: singleUser.lastName,
        phoneNumber: singleUser.phoneNumber,
        age: singleUser.age,
      });
    }
  }, [edit, singleUser]);
  return (
    <div className="formWrapper">
      <form onSubmit={handleSubmit}>
        <div className="formHeader"> {edit ? " Edit User" : "Add User"} </div>
        <div className="formInput">
          <div className="inputLabel">First Name </div>
          <input
            type={"text"}
            name={"firstName"}
            value={formData.firstName}
            onChange={handleChange}
          />
          {errorMessage.firstName && (
            <span className="errorMsg"> {errorMessage.firstName} </span>
          )}
        </div>
        <div className="formInput">
          <div className="inputLabel">Last Name </div>
          <input
            type={"text"}
            name={"lastName"}
            value={formData.lastName}
            onChange={handleChange}
          />
          {errorMessage.lastName && (
            <span className="errorMsg"> {errorMessage.lastName} </span>
          )}
        </div>
        <div className="formInput">
          <div className="inputLabel">Phone Number </div>
          <input
            type={"text"}
            name={"phoneNumber"}
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          {errorMessage.phoneNumber && (
            <span className="errorMsg"> {errorMessage.phoneNumber} </span>
          )}
        </div>
        <div className="formInput">
          <div className="inputLabel">Age </div>
          <input
            type={"text"}
            value={formData.age}
            name={"age"}
            onChange={handleChange}
          />
          {errorMessage.age && (
            <span className="errorMsg"> {errorMessage.age} </span>
          )}
        </div>
        <div className="formButton">
          <button className="submit" type="submit" onClick={handleSubmit}>
            {edit ? " Update" : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
