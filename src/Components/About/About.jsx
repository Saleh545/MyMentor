import React, { useEffect, useRef } from "react";
import icon from "../../../public/Images/icon.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const About = () => {
    
 const flagRefs = useRef([]);
 const sectionRef = useRef(null);

 useEffect(() => {
   gsap.fromTo(
     flagRefs.current,
     { opacity: 0, y: 50, scale: 0.8 },
     {
       opacity: 1,
       y: 0,
       scale: 1,
       duration: 1,
       stagger: 0.2,
       ease: "power3.out",
       scrollTrigger: {
         trigger: sectionRef.current,
         start: "top 80%",
         toggleActions: "play none none none",
       },
     }
   );
 }, []);
 
  return (
    <div>
 <div className="about-section" id="about-section">
        <div className="container">
          <div className="about">
            <div className="about-flex">
              <div className="about-left">
                <h2>Haqqımızda</h2>
                <p>
                  MyMentor Agency, fərqli sahələrdə özünü inkişaf etdirmək
                  istəyən şəxslərə 40 günlük marafonlar vasitəsilə dəstək
                  göstərən bir təlim platformasıdır. Bu marafonlar çərçivəsində
                  iştirakçılar hərtərəfli hazırlıq prosesindən keçir, praktiki
                  tapşırıqlar, mentorluq görüşləri və daimi izləmə ilə
                  dəstəklənir. Marafonlar 5 əsas istiqaməti əhatə edir və hər
                  bir iştirakçının fərdi hədəflərinə uyğun təlim proqramı təqdim
                  olunur. Bu platforma, öyrənmə və inkişaf yolunda olanlara
                  güclü bir təkan verərək, onların bacarıqlarını artırmaq və
                  hədəflərinə çatmaq üçün zəruri istiqaməti təmin edir.
                </p>
              </div>
              <div className="about-right">
                <div className="about-img">
                  <img src={icon} alt="" />
                </div>
                <p>
                  MyMentor Internship &<br /> Development Agency
                </p>
              </div>
            </div>
            <div className="about-flags" ref={sectionRef}>
              {[
                "https://media-public.canva.com/aZIQA/MAEEUuaZIQA/1/t.jpg",
                "https://media-public.canva.com/jo8eo/MAEErEjo8eo/1/t.jpg",
                "https://media-public.canva.com/EGep4/MAEE5ZEGep4/1/t.jpg",
                "https://media-public.canva.com/MADBrU7ZTEM/1/thumbnail-1.jpg",
                "https://media-public.canva.com/MAC70Ixyhto/1/thumbnail-1.jpg",
              ].map((src, index) => (
                <div
                  key={index}
                  className="flag-img"
                  ref={(el) => (flagRefs.current[index] = el)}
                >
                  <img src={src} alt={`Flag ${index}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
