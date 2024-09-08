import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../resources/taraji-plus.png';

interface HeaderProps {
  onFilterChange?: (id: number) => void;
  currentFilter?: number;
}

const Header: React.FC<HeaderProps> = ({ onFilterChange, currentFilter }) => {
  const location = useLocation();

  return (
    <header>
      <div className="header-content">
        <div className="top-row">
          <div className="logo-container">
            <img src={logo} alt="Taraji+ Logo" className="header-logo" />
            <span className="header-title">TARAJI+</span>
          </div>
          <nav className="main-nav">
            <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Articles</Link>
            <Link to="/taraji-tv" className={location.pathname === '/taraji-tv' ? 'active' : ''}>Taraji TV</Link>
          </nav>
        </div>
        {location.pathname === '/' && (
          <div className="bottom-row">
            <nav className="filter-buttons">
              <button 
                onClick={() => onFilterChange && onFilterChange(0)} 
                className={currentFilter === 0 ? 'active' : ''}
              >
                All
              </button>
              <button 
                onClick={() => onFilterChange && onFilterChange(1)} 
                className={currentFilter === 1 ? 'active' : ''}
              >
                Football
              </button>
              <button 
                onClick={() => onFilterChange && onFilterChange(2)} 
                className={currentFilter === 2 ? 'active' : ''}
              >
                Handball
              </button>
              <button 
                onClick={() => onFilterChange && onFilterChange(3)} 
                className={currentFilter === 3 ? 'active' : ''}
              >
                Volleyball
              </button>
              <button 
                onClick={() => onFilterChange && onFilterChange(4)} 
                className={currentFilter === 4 ? 'active' : ''}
              >
                Autres
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
