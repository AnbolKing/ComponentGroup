import React from 'react';
import './style.css';

const Button = (props) => {
  const {text, type, width, height, color, background, onOK} = props;
  return (
    <button
      style={{
        width,
        height,
        color,
        background,
      }}
      className={`button btn-${type}`}
      onClick={onOK}
    >
      {text? text : '按钮'}
    </button>
  )
}

export default Button;