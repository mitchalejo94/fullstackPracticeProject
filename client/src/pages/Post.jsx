import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Post() {
  let { id } = useParams();
  const [postObject, setPostObject] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3002/posts/byId/${id}`).then((response) => {
      setPostObject(response.data);
    });
  });
  return (
    <div>
      <h1>Post is working {id}</h1>
      <h2>{postObject.title}</h2>
      <h2>{postObject.postText}</h2>
      <h2>{postObject.username}</h2>
    </div>
  );
}
