import React from "react";
import VideoListItem from "./videolistitem";

const VideoList = props => {
  const videoItems = props.videos.map(video => {
    return (
      <VideoListItem key={video.etag} video={video} onVideoSelect={props.onVideoSelect} />
    );
  });

  return <ul className="list-group">{videoItems}</ul>;
};

export default VideoList;
