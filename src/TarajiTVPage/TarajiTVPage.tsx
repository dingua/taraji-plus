import React from 'react';
import { useTarajiTVData } from '../hooks/useTarajiTVData';
import './TarajiTVPage.css';

const TarajiTVPage: React.FC = () => {
  const { data, loading, error } = useTarajiTVData();

  if (loading) return <div className="loading-indicator">Loading...</div>;
  if (error) return <div className="error-message">Error: {error}</div>;

  return (
    <div className="taraji-tv-page">
      <div className="taraji-tv-content">
        <h1>Taraji TV</h1>
        {data?.categories.map(category => (
          <div key={category.category_id} className="category">
            <h2>{category.category_label}</h2>
            <div className="videos">
              {category.videos.map(video => (
                <div key={video.video_id} className="video">
                  <img src={video.thumb} alt={video.video_title} />
                  <h3>{video.video_title}</h3>
                  <a href={video.video_link} target="_blank" rel="noopener noreferrer">Watch Now</a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TarajiTVPage;
