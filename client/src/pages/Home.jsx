import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
// const URL = "http://localhost:3002/posts";
function Home() {
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    //you want to run the logic here
    axios.get("http://localhost:3002/posts").then((response) => {
      setPostList(response.data);
    });
  }, []);
  return (
    <div>
      {postList.map((value, key) => {
        return (
          <div className="post">
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
