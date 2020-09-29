import React from 'react';
import './style.scss';

const PageLoad = (props) => {
  return (
    <div className="body-container">
      <div className="loader JS_on">
        <span class="binary"></span>
        <span class="binary"></span>
        <span class="getting-there">LOADING STUFF...</span>
      </div>
    </div>
  )
}

export default PageLoad;