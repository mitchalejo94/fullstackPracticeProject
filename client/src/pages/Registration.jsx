import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

function Registration() {
  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().min(5).max(15).required(),
    password: Yup.string().min(5).max(15).required(),
  });

  const onSubmit = (data) => {
    axios.post("http://localhost:3002/auth", data).then(() => {
      console.log(data);
    });
  };
  return (
    <div>
      {" "}
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <label>Username: </label>
          <ErrorMessage name="username" component="span" />
          <Field
            id="inputCreatePost"
            name="username"
            placeholder="Username.."
          />

          <label>Password: </label>
          <ErrorMessage name="password" component="span" />
          <Field
            id="inputCreatePost"
            name="password"
            type="password"
            placeholder="Password.."
          />
          <button>Register User </button>
        </Form>
      </Formik>
    </div>
  );
}

export default Registration;
