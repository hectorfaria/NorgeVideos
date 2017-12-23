import _ from "lodash";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import API_KEY_YOUTUBE from "./auth/keys";
import SearchBar from "./components/searchbar";
import YTSearch from "youtube-api-search";
import VideoList from "./components/videolist";
import VideoDetail from "./components/videodetail";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [], selectedVideo: null };
    this.SearchVids("visit norge");
  }

  SearchVids(term) {
    YTSearch({ key: API_KEY_YOUTUBE, term: `norge ${term}` }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[1]
      });
    });
  }

  render() {
    const SearchVids = _.debounce(term => {
      this.SearchVids(term);
    }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={SearchVids} />
        <div className="row">
          <div className="col-md-8">
            <VideoDetail video={this.state.selectedVideo} />
          </div>
          <div className="col-md-4">
            <VideoList
              onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
              videos={this.state.videos}
            />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
