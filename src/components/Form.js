/** @format */

import React from "react";
import "./Form.css";
const Form = ({
  handleSubmit,
  values,
  handleChange,
  handleBlur,
  errors,
  touched,
  edit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="formHeader"> {edit ? " Edit User" : "Add User"} </div>
      <div className="formInput">
        <div className="inputLabel">First Name </div>
        <input
          type={"text"}
          name={"firstName"}
          value={values?.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.firstName && touched.firstName && (
          <span className="errorMsg"> {errors.firstName} </span>
        )}
      </div>
      <div className="formInput">
        <div className="inputLabel">Last Name </div>
        <input
          type={"text"}
          name={"lastName"}
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.lastName && touched.lastName && (
          <span className="errorMsg"> {errors.lastName} </span>
        )}
      </div>
      <div className="formInput">
        <div className="inputLabel">Phone Number </div>
        <input
          type={"text"}
          name={"phoneNumber"}
          value={values.phoneNumber}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.phoneNumber && touched.phoneNumber && (
          <span className="errorMsg"> {errors.phoneNumber} </span>
        )}
      </div>
      <div className="formInput">
        <div className="inputLabel">Age </div>
        <input
          type={"text"}
          value={values.age}
          name={"age"}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.age && touched.age && (
          <span className="errorMsg"> {errors.age} </span>
        )}
      </div>
      <div className="formButton">
        <button className="submit" type="submit">
        {edit ? " Update" : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default Form;
