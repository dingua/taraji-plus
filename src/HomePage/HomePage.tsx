import React from 'react';
import FeaturedArticle from '../components/FeaturedArticle';
import NextMatch from '../components/NextMatch';
import ArticleList from '../components/ArticleList';
import { useHomeData } from '../hooks/useHomeData';
import '../App.css';

const HomePage: React.FC = () => {
  const { articles, nextMatch, totalPages, currentPage, loading, error, fetchNextPage } = useHomeData();

  if (error) return <div>Error: {error}</div>;

  return (
    <div className="home-page">
      {articles.length > 0 && (
        <>
          <FeaturedArticle article={articles[0]} />
          {nextMatch && <NextMatch match={nextMatch} />}
          <ArticleList articles={articles.slice(1)} />
          {currentPage < totalPages && (
            <button 
              className="load-more-button" 
              onClick={fetchNextPage}
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Load More'}
            </button>
          )}
        </>
      )}
      {loading && currentPage === 1 && <div>Loading...</div>}
    </div>
  );
};

export default HomePage;
