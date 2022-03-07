import HeroDescription from "../../components/HeroDescription/HeroDescription";
import Comments from "../../components/Comments/Comments";
import HeroVideo from "../../components/HeroVideo/HeroVideo";
import NextVideos from "../../components/NextVideos/NextVideos";
import { Component } from "react";
import api from "../../data/api";
import "./Home.scss";

class Home extends Component {
  state = {
    videoList: [],
    videoObj: null,
  };

  componentDidMount() {
    api.getAll().then((response) => {
      this.setState({
        videoList: response.data,
      });
      api.getVideoById(response.data[0].id).then((response) => {
        this.setState({
          videoObj: response.data,
        });
      });
    });
  }

  componentDidUpdate(prevProps) {
    const currentId = this.props.match.params.id;
    const prevId = prevProps.match.params.id;

    if (currentId && (currentId !== prevId || !this.state.videoObj)) {
      api.getVideoById(currentId).then((response) => {
        this.setState({
          videoObj: response.data,
        });
      });
    }
  }

  render() {
    if (!this.state.videoObj) {
      return <div className="loading"></div>;
    }

    const filtered = this.state.videoList.filter(
      (video) => video.id !== this.state.videoObj.id
    );

    return (
      <main className="main">
        <HeroVideo video={this.state.videoObj} />
        <HeroDescription description={this.state.videoObj} />
        <Comments comments={this.state.videoObj.comments} />
        <NextVideos videoArray={filtered} />
      </main>
    );
  }
}

export default Home;
