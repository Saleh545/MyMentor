import React from "react";
import icon from "../../../public/Images/MyMentor.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header>
        <div className="container">
          <div className="header">
            <Link to="/" className="left">
              <div className="left-img"><img  src={icon} alt="icon" /></div>
              <span className="icon-text">MyMentor Internship & Development Agency</span>
            </Link>            
            <div className="navbar">
              <Link to="/" >Ana səhifə</Link>
              <Link to="#marathon-section">Marafonlar</Link>
              <Link to="/#about-section">Haqqımızda</Link>
              <Link to="/project-sell">Layihəni sat</Link>
              <Link to="/#registerForm">Müraciət et</Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
