import React, { useState, useEffect } from "react";
import icon from "../../../public/Images/MyMentor.jpg";
import { Link } from "react-router-dom";
import { Fade as Hamburger } from 'hamburger-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 991);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isOpen && isMobile) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen, isMobile]);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
        <div className="container">

          <div className="header">
            <Link to="/" className="left">
              <div className="left-img"><img src={icon} alt="icon" /></div>
              <span className="icon-text">MyMentor Internship & Development Agency</span>
            </Link>

            <div className="hamburger-menu">
              <Hamburger toggled={isOpen} toggle={setIsOpen} />
            </div>

            <div className={`navbar ${isOpen ? "open" : ""}`}>
              <Link to="/" className="navbar-link" onClick={toggleNavbar}>Ana səhifə</Link>
              <Link to="/#marathon-section" className="navbar-link" onClick={toggleNavbar}>Marafonlar</Link>
              <Link to="/#about-section" className="navbar-link" onClick={toggleNavbar}>Haqqımızda</Link>
              <Link to="/project-sell" className="navbar-link" onClick={toggleNavbar}>Layihəni sat</Link>
              <Link to="/Blog" className="navbar-link" onClick={toggleNavbar}>Bloq</Link>
              <Link to="/#registerForm" className="navbar-link" onClick={toggleNavbar}>Müraciət et</Link>
            </div>
          </div>
          
      </div>
      </header>
  );
};

export default Header;
