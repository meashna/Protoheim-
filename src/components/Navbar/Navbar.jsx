import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"; // Import useNavigate hook
import "./Navbar.css";
import { FaBars, FaTimes, FaWifi } from "react-icons/fa";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const navigate = useNavigate(); // Hook for programmatically navigating

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  // Function to close the navbar and navigate to the path
  const handleCloseAndNavigate = (path) => {
    setShowNavbar(false); // Close the navbar
    navigate(path); // Navigate to the path
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
                  <NavLink to="/" onClick={() => handleCloseAndNavigate("/")}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/About"
                    onClick={() => handleCloseAndNavigate("/About")}
                  >
                    About us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/careers"
                    onClick={() => handleCloseAndNavigate("/careers")}
                  >
                    Careers
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/courses"
                    onClick={() => handleCloseAndNavigate("/courses")}
                  >
                    Courses
                  </NavLink>
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
