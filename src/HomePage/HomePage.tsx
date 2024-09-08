import React, { useRef, useCallback, useState } from 'react';
import Header from '../components/Header';
import FeaturedArticle from '../components/FeaturedArticle';
import NextMatch from '../components/NextMatch';
import ArticleList from '../components/ArticleList';
import { useHomeData } from '../hooks/useHomeData';
import '../App.css';

const HomePage: React.FC = () => {
  const [competitionTypeId, setCompetitionTypeId] = useState<number>(0);
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

  const handleFilterChange = (id: number) => {
    setCompetitionTypeId(id);
  };

  if (error) return <div>Error: {error}</div>;

  return (
    <div className="home-page">
      <Header onFilterChange={handleFilterChange} currentFilter={competitionTypeId} />
      <main>
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
      </main>
    </div>
  );
};

export default HomePage;
