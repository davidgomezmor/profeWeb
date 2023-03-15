import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import logo from '../assets/img/logo.png';
 

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-6">
          
          <ul className="flex">
          {/* <li>
            <img src={logo}/>
          </li> */}
            <li className="mr-6">
              <Link to="/" className="text-gray-900 font-medium hover:text-gray-700 transition-colors duration-300">Home</Link>
            </li>
            <li className="mr-6">
              <Link to="/Courses" className="text-gray-900 font-medium hover:text-gray-700 transition-colors duration-300">Courses</Link>
            </li>
            <li className="mr-6">
              <Link to="/About" className="text-gray-900 font-medium hover:text-gray-700 transition-colors duration-300">About me</Link>
            </li>
            <li className="mr-6">
              <Link to="/Login" className="text-gray-900 font-medium hover:text-gray-700 transition-colors duration-300">Log In</Link>
            </li>
            <li className="mr-6">
              <Link to="/Register" className="text-gray-900 font-medium hover:text-gray-700 transition-colors duration-300">Register</Link>
            </li>
            <li>
              <Link to="/Contact" className="text-gray-900 font-medium hover:text-gray-700 transition-colors duration-300">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar

