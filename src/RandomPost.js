import React from "react";

let PostArr = [
  "Wow, Great Post",
  "Good read, thanks!",
  "Subscribed!",
  "Reminds me of another story i've heard",
  "Thanks for posting!",
];

const RandomPost = () => {
  let randomPost = Math.floor(Math.random() * PostArr.length);
  return PostArr[randomPost];
};

export default RandomPost;
