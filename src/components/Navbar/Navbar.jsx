import { useState } from 'react'
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <h1>Brand</h1>
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
          <FaBars />
        </div>
          <div className={`nav-elements  ${showNavbar && 'active'}`}>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/About">About us </NavLink>
              </li>
              <li>
                <NavLink to="/careers">Careers</NavLink>
              </li>
              <li>
                <NavLink to="/courses">Courses</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
