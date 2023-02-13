/** @format */

import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import Form from "./Form";
import { createUsers } from "./Redux/action";
import { validationSchema } from "./validationSchema";

const AddUser = () => {
  const dispatch = useDispatch();

  const initialValues = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    age: "",
  };

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: validationSchema,
      onSubmit: (val) => {
        dispatch(createUsers(val));
      },
    });
  return (
    <div className="formWrapper">
      <Form
        handleSubmit={handleSubmit}
        values={values}
        errors={errors}
        handleChange={handleChange}
        handleBlur={handleBlur}
        touched={touched}
      />
    </div>
  );
};

export default AddUser;
