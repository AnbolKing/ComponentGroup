import React from 'react';
import './style.scss';

const SlideLoad = (props) => {
  const { percent } = props;
  return (
    <div className="slide-container">
      <div className="slide-loader">
        Loading {percent} . . . 
      </div>
    </div>
  )
}

export default SlideLoad;