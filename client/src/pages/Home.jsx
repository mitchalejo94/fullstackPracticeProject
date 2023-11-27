import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// const URL = "http://localhost:3002/posts";
function Home() {
  const [postList, setPostList] = useState([]);
  let navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:3002/posts").then((response) => {
      setPostList(response.data);
    });
  }, []);
  return (
    <div>
      {postList.map((value, key) => {
        return (
          <div
            key={key}
            className="post"
            onClick={() => {
              navigate(`/post/${value.id}`);
            }}
          >
            <div className="title">{value.title} </div>
            <div>{value.postText}</div>
            <div>{value.username}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
