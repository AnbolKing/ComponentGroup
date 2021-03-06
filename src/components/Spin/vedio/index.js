import React from 'react';
import './style.css';

const SpinVedio = (props) => {
  return (
    <div className='spin-container'>
      <div className='spin-vedio'>
        <div className="spin-title">
          <p>Loading</p>
        </div>
        <div className="spin-img">
          <div className='spin-pot vedio1'></div>
          <div className='spin-pot vedio2'></div>
          <div className='spin-pot vedio3'></div>
          <div className='spin-pot vedio4'></div>
          <div className='spin-pot vedio5'></div>
        </div>
      </div>
    </div>
  )
}

export default SpinVedio;