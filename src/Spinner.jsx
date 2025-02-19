import React from "react";
import "./Spinner.css";

const Spinner = ({ countdown }) => {
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
      <p className="loading-text">  🚀 Launching in <span className="countdown-number">{countdown}</span>...</p>
    </div>
  );
};

export default Spinner;
