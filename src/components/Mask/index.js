import React from 'react';
import './style.css';

const Mask = (props) => {
  const { show, content, closeMask } = props;
  const handleClose = () => {
    if(closeMask) {
      document.getElementsByClassName('mask-container')[0].style.display = 'none';
    }
    else {
      return ;
    }
  }
  return (
    <div className="mask-container" style={{display: show?'flex':'none'}} onClick={handleClose}>
      <div className="mask-content">
        {content}
      </div>
    </div>
  )
}

export default Mask;