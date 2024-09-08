import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import ArticlePage from './ArticlePage/ArticlePage';
import Footer from './components/Footer';
import './App.css';
import TarajiTVPage from './TarajiTVPage/TarajiTVPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/article/:id" element={<ArticlePage />} />
            <Route path="/taraji-tv" element={<TarajiTVPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
