// import './App.css';
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
    currentVideo: VideoData[0],
  };

  updateCurrentVideo = (id) => {
    this.setState({
      currentVideo: id,
    });
  };

  render() {
    return (
      <>
        <Nav />
        <HeroVideo
          video={this.state.currentVideo}
          updateCurrentVideo={this.updateCurrentVideo}
        />
        <HeroDescription description={this.state.currentVideo} />
        <Comments comments={this.state.currentVideo.comments} />
        <NextVideos videoArray={VideoList} />
      </>
    );
  }
}

export default App;
