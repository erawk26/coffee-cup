import React, { Component } from "react";
import StarRating from "react-star-rating-component";
import RatingSlider from "./RatingSlider";
import "./TastingForm.css";
class TastingForm extends Component {
  nameRef = React.createRef();
  originRef = React.createRef();
  roasterRef = React.createRef();
  roastdateRef = React.createRef();
  tastedateRef = React.createRef();
  beverageRef = React.createRef();
  ratingRef = React.createRef();
  bodyRef = React.createRef();
  stoneFruitRef = React.createRef();
  acidityRef = React.createRef();
  chocolateRef = React.createRef();
  caramelRef = React.createRef();
  xxxRef = React.createRef();
  constructor(props, context) {
    super(props, context);
    this.state = {
      rating: 0,
      notebook: {}
    };
  }
  saveCoffee = e => {
    e.preventDefault();
    let coffee = {
      name: this.nameRef.current.value,
      origin: this.originRef.current.value,
      roaster: this.roasterRef.current.value,
      roastdate: this.roastdateRef.current.value,
      tastedate: this.tastedateRef.current.value,
      beverage: this.beverageRef.current.value,
      rating: this.ratingRef.current.state.value,
      notes: {
        body: this.bodyRef.current.state.rating,
        caramel: this.caramelRef.current.state.rating,
        chocolate: this.chocolateRef.current.state.rating,
        stoneFruit: this.stoneFruitRef.current.state.rating,
        xxx: this.xxxRef.current.state.rating,
      }
    };
    this.setState(prev => {
      prev.notebook[Date.now()] = coffee;
    });
    console.log(this.state.notebook);
  };
  render() {
    return (
      <form id="tastingForm" className="tasting" onSubmit={this.saveCoffee}>
        <header className="form-header">
          <h1 className="form-title">Coffee Notes</h1>
        </header>
        <p className="form-intro">fill out the form to keep track.</p>
        <input
          ref={this.nameRef}
          type="text"
          id="tasteform-name"
          className="name"
          name="name"
          placeholder="Coffee Name"
        />
        <input
          ref={this.originRef}
          type="text"
          id="tasteform-origin"
          className="origin"
          name="origin"
          placeholder="Origin"
        />
        <input
          ref={this.roasterRef}
          type="text"
          id="tasteform-roaster"
          className="roaster"
          name="roaster"
          placeholder="Roaster"
        />
        <input
          ref={this.roastdateRef}
          type="text"
          id="tasteform-roasted-date"
          className="roasted-date small"
          name="roasted-date"
          placeholder="Roasted Date"
        />
        <input
          ref={this.tastedateRef}
          type="text"
          id="tasteform-date"
          className="date small"
          name="date"
          placeholder="Date"
        />
        <input
          ref={this.beverageRef}
          type="text"
          id="tasteform-beverage"
          className="beverage"
          name="beverage"
          placeholder="Beverage"
        />
        <div className="input-group rating" id="tasteform-cupping">
          <label htmlFor="rating">Overall Rating</label>
          <StarRating
            ref={this.ratingRef}
            starColor={`#ffb400`}
            emptyStarColor={`#ccc`}
            starCount={8}
            id="tasteform-rating"
            className="star rating"
            name="rating"
          />
        </div>
        <div className="flex-container sliders">
        <RatingSlider
          ref={this.bodyRef}
          name="Body"
          id="cupping-note-body"
        />
        <RatingSlider
          ref={this.caramelRef}
          name="Caramel"
          id="cupping-note-caramel"
        />
        <RatingSlider
          ref={this.chocolateRef}
          name="Chocolate"
          id="cupping-note-chocolate"
        />
        <RatingSlider
          ref={this.stoneFruitRef}
          name="Stone Fruit"
          id="cupping-note-stone-fruit"
        />
        <RatingSlider
          ref={this.xxxRef}
          name="XXX"
          id="cupping-note-XXX"
          />
          </div>
        <textarea
          className="other-notes"
          id="tasteform-other-notes"
          name="other-notes"
          placeholder="Other Notes"
        />
        <button type="submit">Save</button>
      </form>
    );
  }
}

export default TastingForm;
