import React, { useEffect, useState, useRef } from "react";
import mainImage from "../../../public/Images/MainImage.png";
import { gsap } from "gsap";

const Main = () => {

    const boxRef = useRef(null);

    useEffect(() => {
     gsap.from(boxRef.current, {
       x: 200, 
       opacity: 0, 
       duration: 1.5, 
     });
   }, []);
   useEffect(() => {
     gsap.from(".main-left h1", {
       x: -200, // Sol taraftan 200px uzaklık
       opacity: 0,
       duration: 1,
     });
     gsap.from(".main-left p", {
       x: -200,
       opacity: 0,
       duration: 1,
       delay: 0.3,
     });
     gsap.from(".main-left h2", {
       x: -200,
       opacity: 0,
       duration: 1,
       delay: 0.6,
     });
   }, []);
 
  return (
    <div>
           <div className="main">
        <div className="main-menu">
          <div className="container">
            <div className="main-content">
              <div className="main-left">
                <h1>MyMentor təcrübə və inkişaf agentliyi</h1>
                <p>40 gün ərzində karyeranıza ilk addımı bizimlə atın!</p>
                <h2>95% Praktika!</h2>
              </div>
              <div className="main-right">
                <div className="main-box"ref={boxRef}>
                  <div className="main-image">
                  <img src={mainImage} alt="" />
                  </div>
                  <div className="main-text">
                    <p className="mymentor">
                      MyMentorla <br /> Karyera qur!{" "}
                    </p>
                    <span>#Gəncistedadlar</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main