import React from 'react';
import { useParams } from 'react-router-dom';
import VideoPlayer from './VideoPlayer';
import './VideoPlayerPage.css'; 

const VideoPlayerPage = () => {
  const { videoId } = useParams();

  return (
    <div className="video-player-page">
      <h2 className="video-player-title">Watch</h2>
      <VideoPlayer videoUrl={decodeURIComponent(videoId)} />
    </div>
  );
};

export default VideoPlayerPage;
