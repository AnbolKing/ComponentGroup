import React from 'react';
import './style.css';

const SpinMusic = (props) => {
  return (
    <div className='spin-container'>
      <div className='spin-music'>
        <div className="spin-title">
          <p>Loading</p>
        </div>
        <div className="spin-img">
          <div className='spin-line music1'></div>
          <div className='spin-line music2'></div>
          <div className='spin-line music3'></div>
          <div className='spin-line music4'></div>
          <div className='spin-line music5'></div>
        </div>
      </div>
    </div>
  )
}

export default SpinMusic;