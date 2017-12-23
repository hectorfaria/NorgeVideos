import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="media">
        <div className="media-left">
          <img
            className="media-object d-flex mr-3 hidden-xs-down img-description"
            src={video.snippet.thumbnails.default.url}
          />
        </div>
        <div className="media-body">
          <div className="media-heading videotitle">{video.snippet.title}</div>
          <div className="videochannel">{video.snippet.channelTitle}</div>
          <div className="detail hidden-xs-down">{video.snippet.description}</div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
