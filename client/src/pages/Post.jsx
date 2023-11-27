import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Post() {
  let { id } = useParams();
  const [postObject, setPostObject] = useState({});
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:3002/posts/byId/${id}`).then((response) => {
      setPostObject(response.data);
    });
    axios.get(`http://localhost:3002/comments/${id}`).then((response) => {
      setComments(response.data);
    });
  }, []);

  const addComment = () => {
    axios
      .post("http://localhost:3002/comments", {
        commentBody: newComment,
        PostId: id,
      })
      .then((response) => {
        const commentToAdd = { commentBody: newComment };
        setComments([...comments, commentToAdd]);
        setNewComment("");
      });
  };
  return (
    <>
      <div>
        <div>
          <h1>Post is working {id}</h1>
          <h2>{postObject.title}</h2>
          <h2>{postObject.postText}</h2>
          <h2>{postObject.username}</h2>
        </div>
        <div>
          <h1>Comments Section</h1>
          <div className="addCommentContainer">
            <input
              type="text"
              placeholder="Post your comment"
              value={newComment}
              onChange={(event) => {
                setNewComment(event.target.value);
              }}
            />
            <button onClick={addComment}>Submit Comment</button>
          </div>
          <div className="listOfComments">
            {comments.map((comment, key) => {
              return (
                <div key={key} className="comment">
                  {comment.commentBody}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
