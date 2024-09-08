import React from 'react';
import FeaturedArticle from '../components/FeaturedArticle';
import NextMatch from '../components/NextMatch';
import ArticleList from '../components/ArticleList';
import { useHomeData } from '../hooks/useHomeData';

const HomePage: React.FC = () => {
  const { data, loading, error } = useHomeData();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="home-page">
      {data && (
        <>
          <FeaturedArticle article={data.articles[0]} />
          <NextMatch match={data.nextMatch} />
          <ArticleList articles={data.articles.slice(1)} />
        </>
      )}
    </div>
  );
};

export default HomePage;
