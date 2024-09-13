import React, { useRef, useCallback } from 'react';
import FeaturedArticle from '../components/FeaturedArticle';
import NextMatch from '../components/NextMatch';
import ArticleList from '../components/ArticleList';
import { useHomeData } from '../hooks/useHomeData';
import '../App.css';

interface HomePageProps {
  competitionTypeId: number;
}

const HomePage: React.FC<HomePageProps> = ({ competitionTypeId }) => {
  const { articles, nextMatch, totalPages, currentPage, loading, error, fetchNextPage } = useHomeData(competitionTypeId);
  const observer = useRef<IntersectionObserver | null>(null);
  const lastArticleElementRef = useCallback((node: HTMLDivElement | null) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && currentPage < totalPages) {
        fetchNextPage();
      }
    });
    if (node) observer.current.observe(node);
  }, [loading, currentPage, totalPages, fetchNextPage]);

  if (error) return <div>Error: {error}</div>;

  return (
    <div className="home-page">
      <div className="home-content">
        {articles.length > 0 && (
          <>
            <FeaturedArticle article={articles[0]} />
            {nextMatch && <NextMatch match={nextMatch} />}
            <ArticleList 
              articles={articles.slice(1)} 
              lastArticleRef={lastArticleElementRef}
            />
          </>
        )}
        {loading && <div className="loading-indicator">Loading...</div>}
      </div>
    </div>
  );
};

export default HomePage;
