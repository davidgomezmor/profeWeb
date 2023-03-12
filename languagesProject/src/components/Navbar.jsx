import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Logo" className="navbar-logo-img" />
        </Link>
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">Inicio</Link>
          </li>
          <li className="navbar-item">
            <Link to="/Courses" className="navbar-link">Clases</Link>
          </li>
          <li className="navbar-item">
            <Link to="/About" className="navbar-link">Sobre mí</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contacto" className="navbar-link">Contacto</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <button className="navbar-button">Iniciar sesión</button>
      </div>
    </nav>
  );
}