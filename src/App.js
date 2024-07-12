import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import data from './data.json'; 
import VideoCard from './components/VideoCard';
import VideoPlayerPage from './components/VideoPlayerPage';
import './App.css'; 

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Clamphook Videos by simon :)</h1>
        </header>
        <main className="App-main">
          <Routes>
            <Route path="/" element={<Home videos={data} />} />
            <Route path="/play/:videoId" element={<VideoPlayerPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

const Home = ({ videos }) => (
  <div className="video-cards">
    {videos.map((item, index) => (
      <VideoCard key={index} name={item.name} videoUrl={item.video} />
    ))}
  </div>
);

export default App;
