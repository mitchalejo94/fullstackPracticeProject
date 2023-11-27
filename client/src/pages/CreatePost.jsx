import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
//with Formik it is uncessary to use states to hold the values of the inputs.
import axios from "axios";

export default function CreatePost() {
  const initialValues = {
    title: "",
    postText: "",
    username: "",
  };
  const validationSchema = Yup.object().shape({
    title: Yup.string().required(),
    postText: Yup.string().required(),
    username: Yup.string().min(3).max(15).required(),
  });

  const onSubmit = (data) => {
    axios.post("http://localhost:3002/posts", data).then((response) => {
      console.log("it worked", response, data);
    });
  };
  return (
    <div className="createPostPage">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <label>Title: </label>
          <ErrorMessage name="title" component="span" />
          <Field
            id="inputCreatePost"
            name="title"
            placeholder="title of page"
          />
          <label>Post: </label>
          <ErrorMessage name="postText" component="span" />
          <Field
            id="inputCreatePost"
            name="postText"
            placeholder="post text of page"
          />
          <label>Username: </label>
          <ErrorMessage name="username" component="span" />
          <Field id="inputCreatePost" name="username" placeholder="Username" />
          <button>Submit Post </button>
        </Form>
      </Formik>
    </div>
  );
}
