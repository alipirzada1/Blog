import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        date={new Date().toLocaleString()}
        avatar={faker.image.image()}
      />
      <CommentDetail
        author="Alex"
        date={new Date().toLocaleString()}
        avatar={faker.image.image()}
      />
      <CommentDetail
        author="Jane"
        date={new Date().toLocaleString()}
        avatar={faker.image.image()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

if (module.hot) {
  module.hot.accept();
}
