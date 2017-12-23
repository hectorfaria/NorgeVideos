import React from "react";

const VideoListItem = ({ video, onVideoSelect }) => {
  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img
            className="media-object"
            src={video.snippet.thumbnails.default.url}
          />
        </div>
        <div className="media-body">
          <div className="media-heading videotitle">{video.snippet.title}</div>
          <div className="videochannel">{video.snippet.channelTitle}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
