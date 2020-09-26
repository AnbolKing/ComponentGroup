import React from 'react';
import './style.css';

const Info = (props) => {
  const {title, content, text, onOK, nodeStyle, show} = props;
  if(nodeStyle) {
    nodeStyle.display = show?'':'none';
  }
  return (
    <div className="info-container" style={nodeStyle}>
      <div className="info-title">
        {title?title:'Title'}
      </div>
      <div className="info-divide"></div>
      <div className="info-content">
        {content?content:'Content'}
      </div>
      <div className="info-btn" onClick={onOK}>
        <button>
          {text?text:'Text'}
        </button>
      </div>
    </div>
  )
}

export default Info