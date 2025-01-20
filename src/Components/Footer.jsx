import React from "react";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="footer-section">
        <div className="container">
          <div className="footer">
            <div className="footer-flex">
              <div className="footer-left">
                <h2>Əlaqə vasitələri:</h2>
                <div className="tel">
                  <div className="tel-icon"><BsFillTelephoneOutboundFill /></div>
                  <Link to='tel:+994705621269'>+994 70 562 12 69</Link>
                </div>
                <div className="mail">
                  <div className="mail-icon"><IoIosMail /></div>
                  <Link to="mailto:mymentoragency@gmail.com" >mymentoragency@gmail.com</Link>
                </div>
              </div>
              <div className="footer-right">
                <h5>Müəllif hüquqları MyMentor agentliyi tərəfindən qorunur!</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
