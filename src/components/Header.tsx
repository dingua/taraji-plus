import React from 'react';
import logo from '../resources/taraji-plus.png';

interface HeaderProps {
  onFilterChange: (id: number) => void;
  currentFilter: number;
}

const Header: React.FC<HeaderProps> = ({ onFilterChange, currentFilter }) => {
  return (
    <header>
      <div className="header-content">
        <div className="logo-container">
          <img src={logo} alt="Taraji+ Logo" className="header-logo" />
          <span className="header-title">TARAJI+</span>
        </div>
        <nav className="filter-buttons">
          <button 
            onClick={() => onFilterChange(0)} 
            className={currentFilter === 0 ? 'active' : ''}
          >
            All
          </button>
          <button 
            onClick={() => onFilterChange(1)} 
            className={currentFilter === 1 ? 'active' : ''}
          >
            Football
          </button>
          <button 
            onClick={() => onFilterChange(2)} 
            className={currentFilter === 2 ? 'active' : ''}
          >
            Handball
          </button>
          <button 
            onClick={() => onFilterChange(3)} 
            className={currentFilter === 3 ? 'active' : ''}
          >
            Volleyball
          </button>
          <button 
            onClick={() => onFilterChange(4)} 
            className={currentFilter === 4 ? 'active' : ''}
          >
            Autres
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
