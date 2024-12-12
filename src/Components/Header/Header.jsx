import React, { useState, useEffect } from "react";
import icon from "../../../public/Images/MyMentor.jpg";
import { Link } from "react-router-dom";
import { Fade as Hamburger } from 'hamburger-react';  // Import the Hamburger component

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Disable scrolling when the navbar is open
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Clean up the class when the component unmounts
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]); // Trigger on isOpen change

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div>
      <header>
        <div className="container">
          <div className="header">
            <Link to="/" className="left">
              <div className="left-img"><img src={icon} alt="icon" /></div>
              <span className="icon-text">MyMentor Internship & Development Agency</span>
            </Link>

            {/* Hamburger Menu */}
            <div className="hamburger-menu">
              <Hamburger toggled={isOpen} toggle={setIsOpen} />
            </div>

            {/* Navbar links */}
            <div className={`navbar ${isOpen ? "open" : ""}`}>
              <Link to="/" className="navbar-link" onClick={toggleNavbar}>Ana səhifə</Link>
              <Link to="/#marathon-section" className="navbar-link" onClick={toggleNavbar}>Marafonlar</Link>
              <Link to="/#about-section" className="navbar-link" onClick={toggleNavbar}>Haqqımızda</Link>
              <Link to="/project-sell" className="navbar-link" onClick={toggleNavbar}>Layihəni sat</Link>
              <Link to="/#registerForm" className="navbar-link" onClick={toggleNavbar}>Müraciət et</Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
