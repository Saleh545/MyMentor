import React from 'react';
import icon from "../../public/Images/icon.jpg";
const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-icon-container">
        <img src={icon} alt="Loading..." className="loading-icon" />
      </div>
      <p>Yüklənir...</p>
    </div>
  );
};

export default Loading;
