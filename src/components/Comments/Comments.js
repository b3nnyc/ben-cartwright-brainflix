import timestampToDate from "timestamp-to-date";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import blank_avatar from "../../assets/images/blank_avatar.png";
import "./Comments.scss";

function Comments({ comments }) {
  const count = comments.length;
  return (
    <section className="newComment">
      <h3 className="newComment__counter">{count} Comments</h3>
      <div className="newComment__container">
        <img className="newComment__avatar" src={avatar}></img>
        <div className="newComment__input">
          <div className="newComment__form">
            <label className="newComment__label" for="comment">
              JOIN THE CONVERSATION
            </label>
            <input
              className="newComment__form-box"
              type="text"
              title="JOIN THE CONVERSATION"
              placeholder="Add a new comment"
            ></input>
          </div>
          <button className="newComment__button" type="submit">
            COMMENT
          </button>
        </div>
      </div>
      {comments.map((comment) => (
        <div className="pastComments" key={comment.timestamp}>
          <img className="pastComments__avatar" src={blank_avatar}></img>
          <div className="pastComments__container">
            <div className="pastComments__body">
              <h4 className="pastComments__name">{comment.name}</h4>
              <h5 className="pastComments__date">
                {timestampToDate(comment.timestamp, "MM/dd/yyyy")}{" "}
              </h5>
            </div>
            <p className="pastComments__copy">{comment.comment}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Comments;
