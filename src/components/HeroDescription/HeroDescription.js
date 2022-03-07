import "./HeroDescription.scss";
import views from "../../assets/images/views.svg";
import likes from "../../assets/images/likes.svg";
import timestampToDate from "timestamp-to-date";

function HeroDescription({ description }) {
  return (
    <section className="description">
      <h2 className="description__title">{description.title}</h2>
      <div className="description__container">
        <div className="description__left">
          <h3 className="description__channel">By {description.channel}</h3>
          <h4 className="description__date">
            {timestampToDate(description.timestamp, "MM/dd/yyyy")}
          </h4>
        </div>
        <div className="description__right">
          <div className="description__views">
            <img className="description__views-img" src={views} alt="views" />
            <h4 className="description__views-count">{description.views}</h4>
          </div>
          <div className="description__likes">
            <img className="description__likes-img" src={likes} alt="likes" />
            <h4 className="description__likes-count">{description.likes}</h4>
          </div>
        </div>
      </div>
      <p className="description__copy">{description.description}</p>
    </section>
  );
}

export default HeroDescription;
