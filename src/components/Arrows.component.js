import React, { Component } from "react";

const RightArrow = props => {
  return (
    <div onClick={props.nextSlide} className="nextArrow">
      <i className="fa fa-arrow-right fa-2x" aria-hidden="true" />
    </div>
  );
};

const LeftArrow = props => {
  return (
    <div onClick={props.previousSlide} className="backArrow">
      <i className="fa fa-arrow-left fa-2x" aria-hidden="true" />
    </div>
  );
};

export { RightArrow, LeftArrow };
