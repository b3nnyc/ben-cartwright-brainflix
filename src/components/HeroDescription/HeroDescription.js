import "./HeroDescription.scss";
import views from "../../assets/images/views.svg";
import likes from "../../assets/images/likes.svg";

function HeroDescription({ description }) {
  return (
    <section className="description">
      <>
        <h2 className="description__title">{description.title}</h2>
        <div className="description__container">
          <h3 className="description__channel">{description.channel}</h3>
          <h4 className="description__date">{description.timestamp}</h4>
          <div className="description__views">
            <img
              className="description__views-img"
              src={views}
              alt="views"
            ></img>
            <h4 className="description__views-count">{description.views}</h4>
          </div>
          <div className="description__likes">
            <img
              className="description__likes-img"
              src={likes}
              alt="likes"
            ></img>
            <h4 className="description__likes-count">{description.likes}</h4>
          </div>
        </div>
        <p className="description__copy">{description.description}</p>
      </>
    </section>
  );
}

export default HeroDescription;
