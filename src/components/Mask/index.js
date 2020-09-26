import React from 'react';
import './style.css';

const Mask = (props) => {
  const { show, content } = props;
  return (
    <div className="mask-container" style={{display: show?'flex':'none'}}>
      <div className="mask-content">
        {content}
      </div>
    </div>
  )
}

export default Mask;