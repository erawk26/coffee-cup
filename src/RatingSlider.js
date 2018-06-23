import React, { Component } from "react";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";
class RatingSlider extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      rating: 0
    };
  }

  handleOnChange = value => {
    this.setState({
      rating: value
    });
  };

  render() {
    let { rating } = this.state;
    return <div className="input-group number">
        <label className="cupping-note">
          {this.props.name}<br/>{this.state.rating}
        </label>
        <Slider min={0} max={10} step={0.5} value={rating} orientation="vertical" onChange={this.handleOnChange} />
      </div>;
  }
}
export default RatingSlider;
