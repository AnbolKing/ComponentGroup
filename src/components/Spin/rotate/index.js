import React from 'react';
import './style.css';

const SpinRotate = (props) => {
  return (
    <div className='spin-container'>
      <div className='spin-rotate'>
        <div className="spin-title">
          <p>Loading</p>
        </div>
        <div className="spin-img">
          <div className='spin-circle'></div>
        </div>
      </div>
    </div>
  )
}

export default SpinRotate;