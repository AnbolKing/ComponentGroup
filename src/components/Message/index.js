import React from 'react';
import './style.css';

const Message = (props) => {
  const {content, title, time, position, show } = props;
  if(!show) {
    //document.getElementsByClassName('message-container')[0].style.display = 'none'
  }
  return (
    <div className="message-container" style={position}>
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