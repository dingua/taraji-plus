import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useSession } from 'next-auth/react';
import HomePage from './HomePage/HomePage';
import ArticlePage from './ArticlePage/ArticlePage';
import Footer from './components/Footer';
import Header from './components/Header';
import Login from './components/Login';
import TarajiTVPage from './TarajiTVPage/TarajiTVPage';
import './App.css';

const App: React.FC = () => {
  const [competitionTypeId, setCompetitionTypeId] = useState<number>(0);
  const { data: session } = useSession();

  const handleFilterChange = (id: number) => {
    setCompetitionTypeId(id);
  };
  
  return (
    <Router>
      <div className="App">
        <Header onFilterChange={handleFilterChange} currentFilter={competitionTypeId} />
        <main>
          {!session ? (
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
          ) : (
            <Routes>
              <Route path="/" element={<HomePage competitionTypeId={competitionTypeId} />} />
              <Route path="/article/:id" element={<ArticlePage />} />
              <Route path="/taraji-tv" element={<TarajiTVPage />} />
            </Routes>
          )}
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
