import "./HeroVideo.scss";

function HeroVideo({ video }) {
  return (
    <section className="video">
      <div className="video__content">
        <div>
          <img src={video.image}></img>
        </div>
      </div>
    </section>
  );
}

export default HeroVideo;
