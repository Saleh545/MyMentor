import React from "react";
import icon from "../../../public/Images/MyMentor.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header>
        <div className="container">
          <div className="header">
            <div className="left">
              <div className="left-img"><img  src={icon} alt="icon" /></div>
              <span className="icon-text">MyMentor Internship & Development Agency</span>
            </div>            
            <div className="navbar">
              <Link to="#" >Ana səhifə</Link>
              <Link to="#marathom">Marafonlar</Link>
              <Link to="#about">Haqqımızda</Link>
              <Link to="#contact">Müraciət et</Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
