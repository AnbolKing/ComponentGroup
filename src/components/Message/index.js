import React from 'react';
import './style.css';

const Message = (props) => {
  const {content, title, position, delay } = props;
  setTimeout(() => {
    document.getElementsByClassName('message-container')[0].className = 'message-container fadeOutDown'
  },delay)
  return (
    <div className="message-container fadeInDown" style={position}>
      {
        title?(
          <div className="message-title">
            {title}
          </div>
        ):null
      }
      {
        title?(
          <div className="message-divide"></div>
        ):null
      }
      <div className="message-content">
        {content? content : 'CONTENT'}
      </div>
    </div>
  )
}

export default Message;