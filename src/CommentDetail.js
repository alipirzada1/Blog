import React from "react";
import faker from "faker";
import RandomPost from "./RandomPost";

const CommentDetail = () => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={faker.image.image()} />
      </a>
      <div className="content">
        <a href="/" className="author">
          Sam
        </a>
        <div className="metadata">
          <span className="date">Today at 6:00PM</span>
        </div>
        <div className="text">
          <RandomPost></RandomPost>
        </div>
      </div>
    </div>
  );
};

export default CommentDetail;
