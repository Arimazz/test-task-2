import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink exact className="nav-link" to="/test-task-1/">
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="test-task-1//news">
          News
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="test-task-1//login">
          Login
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="test-task-1//profile">
          Profile
        </NavLink>
      </li>
    </ul>
  </nav>
);
