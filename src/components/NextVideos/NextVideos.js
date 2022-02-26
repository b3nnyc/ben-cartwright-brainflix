function NextVideos({ videoArray }) {
  return (
    console.log(videoArray),
    (
      <section className="nextVideos">
        <h5 className="nextVideos__title">NEXT VIDEOS</h5>
        {videoArray.map((videoObj) => {
          return (
            <div className="nextVideos__container" key={videoObj.id}>
              <img
                className="nextVideos__photo"
                src={videoObj.image}
                alt=""
              ></img>
              <div className="nextVideos__text">
                <h3 className="nextVideos__title">{videoObj.title}</h3>
                <h4 className="nextVideos__channel">{videoObj.channel}</h4>
              </div>
            </div>
          );
        })}
      </section>
    )
  );
}

export default NextVideos;
