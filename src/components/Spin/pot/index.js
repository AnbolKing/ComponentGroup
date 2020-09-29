import React from 'react';
import './style.css';

const SpinPot = (props) => {
  return (
    <div className='spin-container'>
      <div className='spin-pot'>
        <div className="spin-title">
          <p>Loading</p>
        </div>
        <div className="spin-img">
          <div className='spin-circle jump1'></div>
          <div className='spin-circle jump2'></div>
          <div className='spin-circle jump3'></div>
          <div className='spin-circle jump4'></div>
          <div className='spin-circle jump5'></div>
        </div>
      </div>
    </div>
  )
}

export default SpinPot;