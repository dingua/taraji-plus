import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import ArticlePage from './ArticlePage/ArticlePage';
import Footer from './components/Footer';
import Header from './components/Header';
import './App.css';
import TarajiTVPage from './TarajiTVPage/TarajiTVPage';

const App: React.FC = () => {
  const [competitionTypeId, setCompetitionTypeId] = useState<number>(0);

  const handleFilterChange = (id: number) => {
    setCompetitionTypeId(id);
  };
  
  return (
    <Router>
      <div className="App">
        <Header onFilterChange={handleFilterChange} currentFilter={competitionTypeId} />
        <main>
            <Routes>
              <Route path="/" element={<Navigate to="/articles" replace />} />
              <Route path="/articles" element={<HomePage competitionTypeId={competitionTypeId} />} />
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
