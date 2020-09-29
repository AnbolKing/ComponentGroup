import React from 'react';
import './style.css';

const SpinTranslation = (props) => {
  return (
    <div className='spin-container'>
      <div className='spin-translation'>
        <div className="spin-title">
          <p>Loading</p>
        </div>
        <div className="spin-img">
          <div className='spin-circle slide1'></div>
          <div className='spin-circle slide2'></div>
          <div className='spin-circle slide3'></div>
          <div className='spin-circle slide4'></div>
          <div className='spin-circle slide5'></div>
        </div>
      </div>
    </div>
  )
}

export default SpinTranslation;