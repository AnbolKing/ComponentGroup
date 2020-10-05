import React from 'react';
import './style.css';

const ProgressLine = (props) => {
  return (
    <div className="progress-container">
      <div className="progress-charge"></div>
      <div className="progress-text">
        Loading ...
      </div>
    </div>
  )
}

export default ProgressLine;