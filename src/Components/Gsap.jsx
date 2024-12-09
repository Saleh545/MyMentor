import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Gsap = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    // Animasyonu uygulama
    gsap.to(boxRef.current, { x: 900, duration: 2, rotation: 720 });
  }, []);

  return (
    <div>
      <div
        ref={boxRef}
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "blue",
        }}
      />
    </div>
  );
};

export default Gsap;
