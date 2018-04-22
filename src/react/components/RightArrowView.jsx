import React, { Component } from 'react';
import RightArrowViewCss from '../css/RightArrowView.css'

const RightArrowView = (props) => {
  return (
    <div onClick={props.nextSlide} className={RightArrowViewCss.nextArrow}>
      <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
    </div>
  );
}

export default RightArrowView;
