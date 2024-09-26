import React, { useContext, useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { AuthContext } from '../../Auth/AuthContext';
import avatar from '../../Images/avatar.png'; // Correctly import the image
import { getAuth, signOut } from 'firebase/auth';
import app from '../../Firebase';
import { toast } from 'react-toastify';

const Navbar = ({ setActiveComponent }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // For the dropdown
  const { isAuthenticated } = useContext(AuthContext);
  const dropdownRef = useRef(null); // To track the dropdown

  const auth = getAuth(app)

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


  const Logout = () => {
    try {
      signOut(auth).then(() => {
        toast.success('Logged out successfully')
        setIsDropdownOpen(false);
      })
    } catch (error) {
      console.log(error)
      toast.error('Something went Wrong !')
    }
  }
  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    // Add event listener when the component mounts
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Expense Tracker
        </Link>
        <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/dashbord" className="nav-links" onClick={toggleMenu}>
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
        </ul>

        {isAuthenticated && (
          <div className="profile-section">
            <img
              src={avatar}
              alt="Avatar"
              className="avatar"
              onClick={toggleDropdown}

            />
            <div
              ref={dropdownRef}
              className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}
              id="dropdown-menu"
            >
              <Link
                to="#" // Prevent navigation
                className="dropdown-item"
                onClick={() => {
                  setActiveComponent('Profile'); // Set active component to Profile
                  setIsDropdownOpen(false); // Close the dropdown
                }}
              >
                Profile
              </Link>
              <Link
                to="#" // Prevent navigation
                className="dropdown-item"
                onClick={() => {
                  setActiveComponent('Settings'); // Set active component to Profile
                  setIsDropdownOpen(false); // Close the dropdown
                }}
              >
                Settings
              </Link>
              <Link to="/signin" className="dropdown-item" onClick={Logout}>
                Logout

              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
