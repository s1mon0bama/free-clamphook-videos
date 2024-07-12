import React from 'react';
import './VideoPlayer.css'; // Import your CSS file for styles

const VideoPlayer = ({ videoUrl }) => {
  return (
    <div className="video-player">
      <video controls className="video-player-video">
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
