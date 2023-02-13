/** @format */

import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import Form from "./Form";
import { updateUsers } from "./Redux/action";
import { validationSchema } from "./validationSchema";

const EditUser = ({ singleUser, edit }) => {
  const dispatch = useDispatch();
  const initialValues = {
    firstName: singleUser.firstName,
    lastName: singleUser.lastName,
    phoneNumber: singleUser.phoneNumber,
    age: singleUser.age,
  };
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: validationSchema,
      onSubmit: (val) => {
        dispatch(updateUsers(singleUser._id, val));
      },
    });
  console.log("values", values);
  return (
    <div className="formWrapper">
      <Form
        handleSubmit={handleSubmit}
        values={values}
        errors={errors}
        handleChange={handleChange}
        handleBlur={handleBlur}
        touched={touched}
        edit={edit}
      />
    </div>
  );
};

export default EditUser;
