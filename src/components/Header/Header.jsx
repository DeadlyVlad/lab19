import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="nav-list">
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Про мене
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/city"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Моє місто
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/future"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Мій розвиток
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
