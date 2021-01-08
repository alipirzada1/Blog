import React from "react";
import RandomPost from "./RandomPost";

const CommentDetail = (props) => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={props.avatar} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <span className="date">Today at {props.date}</span>
        </div>
        <div className="text">
          <RandomPost></RandomPost>
        </div>
      </div>
    </div>
  );
};

export default CommentDetail;
