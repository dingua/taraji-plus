import React from 'react';
import './App.css';  // Add this line if it's not already there
import Header from './components/Header';
import FeaturedArticle from './components/FeaturedArticle';
import NextMatch from './components/NextMatch';
import ArticleList from './components/ArticleList';
import Footer from './components/Footer';
import { useHomeData } from './hooks/useHomeData';

const App: React.FC = () => {
  const { data, loading, error } = useHomeData();

  console.log(data);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="App">
      <Header />
      <main>
        {data && (
          <>
            <FeaturedArticle article={data.articles[0]} />
            <NextMatch match={data.nextMatch} />
            <ArticleList articles={data.articles.slice(1)} />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
