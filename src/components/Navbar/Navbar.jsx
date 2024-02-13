import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { FaBars, FaTimes, FaWifi } from "react-icons/fa";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <div className="logo-menu">
            {/* logo */}
            <div className="logo">
              <a href="/" className="home-link">
                <img src={logo} className="nav-logo" alt="logo" />
              </a>
            </div>
            {/* menu */}
            <div className={`nav-elements ${showNavbar ? "active" : ""}`}>
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/About">About us</NavLink>
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

          <div className="nav-btn">
            <div className="txt-btn">Reach out</div>
            <div className="wifi-btn">
              <FaWifi />
            </div>
          </div>

          <div className="menu-icon" onClick={handleShowNavbar}>
            {showNavbar ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
