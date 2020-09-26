import React from 'react';
import './style.css';

const Confirm = (props) => {
  const { content, onOK, onCancel, okText, cancelText,title, nodeStyle, show } = props;
  if(nodeStyle) {
    nodeStyle.display = show?'':'none';
  }
  return (
    <div className="confirm-container" style={nodeStyle}>
      <div className="confirm-title">
        { title? title : 'Title'}
      </div>
      <div className="confirm-divide"></div>
      <div className="confirm-content">
        { content? content : 'Content'}
      </div>
      <div className="button-container">
        <button className="btn btn-cancel" onClick={onCancel}>
          {cancelText? cancelText : '取消'}
        </button>
        <button className="btn btn-ok" onClick={onOK}>
          {okText? okText : '确定'}
        </button>
      </div>
    </div>
  )
}

export default Confirm