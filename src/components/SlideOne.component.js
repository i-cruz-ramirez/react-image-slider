import React, { Component } from "react";

const SlideOne = props => {
  let background = {
    backgroundImage: `url(require("public/img/aurora.jpg"))`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  };

  return <div style={background} className="slide" />;
};

export default SlideOne;
