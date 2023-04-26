import React from 'react';
import '../style/DemoButton.css'

function DemoButton() {
  return (
    <button className="learn-more">
      <span className="circle" aria-hidden="true">
        <span className="icon arrow"></span>
      </span>
      <span className="button-text">Try It</span>
    </button>
  );
}

export default DemoButton;