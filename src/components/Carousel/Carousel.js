import React, { Component } from "react";
import TalkBox from "../TalkBox/TalkBox";
import "./Carousel.scss";

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: this.props.slides,
      slideIndex: 0,
    };
  }

  getSlideIndex = (step) => {
    const slideIndex = this.state.slideIndex;
    const numberSlide = this.state.collection.length;
    let newSlideIndex = slideIndex + step;
    if (newSlideIndex >= numberSlide) {
      newSlideIndex = 0;
    } else if (newSlideIndex < 0) {
      newSlideIndex = numberSlide - 1;
    }
    return newSlideIndex;
  };

  backward = () => {
    this.setState({
      slideIndex: this.getSlideIndex(-1),
    });
  };

  forward = () => {
    this.setState({
      slideIndex: this.getSlideIndex(1),
    });
  };

  setSlideIndex = (index) => {
    this.setState({
      slideIndex: index,
    });
  };

  componentDidMount = () => {
    if (this.props.mode === "automatic") {
    }
  };

  render() {
    const { collection } = this.state;

    return (
      <div className="slide-container container">
        <div
          className="slide-inner"
          style={{ width: this.props.width, height: this.props.height }}
        >
          {
            collection?.length && collection.map((c, index) => {
              return (
                <div
                  key={c.customerId ?? index}
                  className={this.state.slideIndex === index ? "slide active" : "slide"}
                >
                  <TalkBox data={c} />
                </div>
              )
            })
          }

          <div className="slide-control">
            <div className="bor-ctrl prev" onClick={this.backward}>
              <span className="prev"> ❮ </span>
            </div>
            <div className="bor-ctrl next" onClick={this.forward}>
              <span className="next"> ❯ </span>
            </div>
          </div>
        </div>

        <div className="dot-control">
          {this.state.collection.map((_, index) => {
            return (
              <span
                key={index}
                className={
                  this.state.slideIndex === index ? "dot active" : "dot"
                }
                onClick={() => {
                  this.setSlideIndex(index);
                }}
              ></span>
            );
          })}
        </div>
      </div>
    );
  }
}
