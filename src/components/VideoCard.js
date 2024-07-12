import React from 'react';
import { Link } from 'react-router-dom';
import './VideoCard.css'; // Import your CSS file for styles

const VideoCard = ({ name, videoUrl }) => {
  return (
    <Link to={`/play/${encodeURIComponent(videoUrl)}`} className="video-card">
      <div className="video-card-inner">
        <h3 className="video-card-title">{name}</h3>
      </div>
    </Link>
  );
};

export default VideoCard;
