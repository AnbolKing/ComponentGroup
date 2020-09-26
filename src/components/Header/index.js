import React from 'react';
import './style.css';
import headerLogo from '../../assets/svg/ncuhome-icon.svg';
import userAvter from '../../assets/png/avter.png';

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-logo">
        <img src={headerLogo} alt="南昌大学家园工作室"/>
        南昌大学家园工作室
      </div>
      <div className="header-user">
        <div className="user-img">
          <img src={userAvter} alt=""/>
        </div>
        <div className="user-name">
          王子安
        </div>
        <div className="header-exit">
          <button>退出</button>
        </div>
      </div>
    </div>
  )
}

export default Header;