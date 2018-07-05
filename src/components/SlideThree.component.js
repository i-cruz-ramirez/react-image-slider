import React, { Component } from "react";

const SlideThree = props => {
  let background = {
    backgroundImage: `url(require("public/img/aurora.jpg"))`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  };

  return <div style={background} className="slide" />;
};

export default SlideThree;
