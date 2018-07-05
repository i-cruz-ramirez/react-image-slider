import React, { Component } from "react";
import SlideOne from "./SlideOne.component";
import SlideTwo from "./SlideTwo.component";
import SlideThree from "./SlideThree.component";
import { RightArrow, LeftArrow } from "./Arrows.component";

export default class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slideCount: 1
    };
  }

  render() {
    return (
      <div className="slider">
        {this.state.slideCount === 1 ? <SlideOne /> : null}
        {this.state.slideCount === 2 ? <SlideTwo /> : null}
        {this.state.slideCount === 3 ? <SlideThree /> : null}

        <RightArrow nextSlide={this.nextSlide} />
        <LeftArrow previousSlide={this.previousSlide} />
      </div>
    );
  }

  nextSlide() {
    this.setState({ slideCount: this.state.slideCount + 1 });
  }

  previousSlide() {
    this.setState({ slideCount: this.state.slideCount - 1 });
  }
}
