import "./HeroVideo.scss";

function HeroVideo({ video }) {
  return (
    <section className="video">
      <div className="video__content">
        <video className="video__player" poster={video.image} controls></video>
      </div>
    </section>
  );
}

export default HeroVideo;
