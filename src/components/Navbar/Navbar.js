import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink exact className="nav-link" to="/">
              Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/news">
              News
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login">
              Login
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/profile">
              Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
