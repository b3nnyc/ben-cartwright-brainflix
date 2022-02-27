import humandate from "human-date";
import "./Comments.scss";

function Comments({ comments }) {
  const count = comments.length;
  return (
    <section className="comments">
      <h3 className="comments__counter">{count} Comments</h3>
      <div className="newComment">
        <div className="newComment__avatar"></div>
        <input
          className="newComment__search"
          type="text"
          title="JOIN THE CONVERSATION"
          placeholder="Add a new comment"
        ></input>
        <button
          className="newComment__button"
          type="submit"
          // onClick={() => setCount(count + 1)}
        >
          COMMENT
        </button>
      </div>
      {comments.map((comment) => (
        <div className="pastComments" key={comment.timestamp}>
          <div className="pastComments__avatar"></div>
          <div className="pastComments__body">
            <h4 className="pastComments__name">{comment.name}</h4>
            <h5 className="pastComments__date">
              {humandate.prettyPrint(new Date(comment.timestamp))}
            </h5>
          </div>
          <p className="pastComments__copy">{comment.comment}</p>
        </div>
      ))}
    </section>
  );
}

export default Comments;
