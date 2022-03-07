import { Link } from "react-router-dom";
import "./NextVideos.scss";

function NextVideos({ videoArray }) {
  return (
    <section className="nextVideos">
      <h5 className="nextVideos__header">NEXT VIDEOS</h5>
      {videoArray.map((videoObj) => {
        return (
          <div className="nextVideos__container" key={videoObj.id}>
            <Link
              className="nextVideos__link"
              style={{ textDecoration: "none" }}
              to={`/watch/${videoObj.id}`}
            >
              <img
                className="nextVideos__photo"
                src={videoObj.image}
                alt={videoObj.name}
              />
              <div className="nextVideos__text">
                <h3 className="nextVideos__title">{videoObj.title}</h3>
                <h4 className="nextVideos__channel">{videoObj.channel}</h4>
              </div>
            </Link>
          </div>
        );
      })}
    </section>
  );
}

export default NextVideos;
