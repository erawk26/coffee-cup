import React, { Component } from "react";
import StarRatingComponent from "react-star-rating-component";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
library.add(faStar);

class StarRating extends Component {
  constructor() {
    super();
    this.state = {
      value: 1
    };
  }

  onStarClickHalfStar(nextValue, prevValue, name, e) {

    const xPos =
      (e.pageX - e.currentTarget.getBoundingClientRect().left) /
      e.currentTarget.offsetWidth;

    if (xPos <= 0.5) {
      nextValue -= 0.5;
    }

//     ---------------------------------
// ENABLE ABOVE THIS LINE TO TURN ON HALF POINTS
//     ---------------------------------

    // console.log(
    //   "name: %s, nextValue: %s, prevValue: %s",
    //   name,
    //   nextValue,
    //   prevValue
    // );
    // console.log(e);

    this.setState({ value: nextValue });

  }

  render() {
    return (
      <StarRatingComponent
        starColor={`#ffb400`}
        emptyStarColor={`#ccc`}
        starCount={5}
        name="star-rating"
        value={this.state.value}
        onStarClick={this.onStarClickHalfStar.bind(this)}
        renderStarIcon={(index, value) => {
          return (
            <span>
              <FontAwesomeIcon icon="star" />
            </span>
          );
        }}
        renderStarIconHalf={() => {
          return (
            <span>
              <FontAwesomeIcon className="half" icon="star" />
            </span>
          );
        }}
      />
    );
  }
}

export default StarRating;
