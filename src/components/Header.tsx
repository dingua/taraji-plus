import React from 'react';
import logo from '../resources/taraji-plus.png';

const Header: React.FC = () => (
  <header>
    <div className="header-content">
      <div className="logo-container">
        <img src={logo} alt="Taraji+ Logo" className="header-logo" />
        <span className="header-title">TARAJI+</span>
      </div>
      <nav>
        <ul>
          <li><a href="#football">Football</a></li>
          <li><a href="#handball">Handball</a></li>
          <li><a href="#volleyball">Volleyball</a></li>
          <li><a href="#autres">Autres</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
