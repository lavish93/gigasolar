import React, { Component } from 'react';
import LeftArrowViewCss from '../css/LeftArrowView.css'

const LeftArrowView = (props) => {
  return (
    <div onClick={props.previousSlide} className={LeftArrowViewCss.backArrow}>
      <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
    </div>
  );
}

export default LeftArrowView;
