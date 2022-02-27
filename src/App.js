import "./styles/App.scss";
import Nav from "./components/Nav/Nav";
import HeroDescription from "./components/HeroDescription/HeroDescription";
import Comments from "./components/Comments/Comments";
import HeroVideo from "./components/HeroVideo/HeroVideo";
import { Component } from "react";
import VideoData from "./data/video-details.json";
import NextVideos from "./components/NextVideos/NextVideos";
import VideoList from "./data/videos.json";

class App extends Component {
  state = {
    currentVideoId: VideoData[0].id,
    videoList: VideoList,
  };

  updateCurrentVideo = (id) => {
    this.setState({
      currentVideoId: id,
    });
  };

  render() {
    const filtered = this.state.videoList.filter(
      (video) => video.id !== this.state.currentVideoId
    );
    const current = VideoData.find(
      (video) => video.id === this.state.currentVideoId
    );
    return (
      <>
        <Nav />
        <HeroVideo video={current} />
        <HeroDescription description={current} />
        <Comments comments={current.comments} />
        <NextVideos
          videoArray={filtered}
          updateCurrentVideo={this.updateCurrentVideo}
        />
      </>
    );
  }
}

export default App;
