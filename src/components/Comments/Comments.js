import "./Comments.scss";
import React from "react";
const { useState } = React;

function Comments({ comments }) {
  const [count, setCount] = useState(3);
  return (
    <section className="comments">
      <h3 className="comments__counter">{count} Comments</h3>
      <div className="newComment">
        <div className="newComment__avatar"></div>
        <input
          className="newComment__search"
          type="text"
          placeholder="Add a new comment"
        ></input>
        <button
          className="newComment__button"
          type="submit"
          onClick={() => setCount(count + 1)}
        >
          COMMENT
        </button>
      </div>
      {comments.map((comment) => (
        <div className="pastComments" key={comment.timestamp}>
          <div className="pastComments__avatar"></div>
          <div className="pastComments__body">
            <h4 className="pastComments__name">{comment.name}</h4>
            <h5 className="pastComments__date">{comment.timestamp}</h5>
          </div>
          <p className="pastComments__copy">{comment.comment}</p>
        </div>
      ))}
    </section>
  );
}

export default Comments;
