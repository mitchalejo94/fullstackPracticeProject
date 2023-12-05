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

  const likeAPost = (postId) => {
    axios
      .post(
        "http://localhost:3002/likes",
        { PostId: postId },
        { headers: { accessToken: localStorage.getItem("accessToken") } }
      )
      .then((response) => {
        setPostList(
          postList.map((post) => {
            if (post.id === postId) {
              if (response.data.liked) {
                return { ...post, Likes: [...post.Likes, 0] };
              } else {
                const likesArray = post.Likes;
                likesArray.pop();
                return { ...post, Likes: likesArray };
              }
            } else {
              return post;
            }
          })
        );
      });
  };
  return (
    <div>
      {postList.map((value, key) => {
        return (
          <div key={key} className="post">
            <div className="title">{value.title} </div>
            <div
              onClick={() => {
                navigate(`/post/${value.id}`);
              }}
            >
              {value.postText}
            </div>
            <div>{value.username}</div>
            <button
              onClick={() => {
                likeAPost(value.id);
              }}
            >
              Like Button
            </button>
            <label>{value.Likes.length}</label>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
