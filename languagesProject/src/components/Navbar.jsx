import React from 'react';
import { Link } from 'react-router-dom';

// import logo from '../assets';

export const Navbar = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-6">
          {/* <Link to="/" className="navbar-logo">
            <img src={logo} alt="Logo" className="navbar-logo-img" />
          </Link> */}
          <ul className="flex">
            <li className="mr-6">
              <Link to="/" className="text-gray-900 font-medium hover:text-gray-700 transition-colors duration-300">Inicio</Link>
            </li>
            <li className="mr-6">
              <Link to="/Courses" className="text-gray-900 font-medium hover:text-gray-700 transition-colors duration-300">Clases</Link>
            </li>
            <li className="mr-6">
              <Link to="/About" className="text-gray-900 font-medium hover:text-gray-700 transition-colors duration-300">Sobre mí</Link>
            </li>
            <li>
              <Link to="/Contact" className="text-gray-900 font-medium hover:text-gray-700 transition-colors duration-300">Contacto</Link>
            </li>
          </ul>
          <button className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 transition-colors duration-300">Iniciar sesión</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
