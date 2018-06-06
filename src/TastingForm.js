import React, { Component } from "react";
import "./TastingForm.css";
class TastingForm extends Component {
  nameRef = React.createRef();
  originRef = React.createRef();
  roasterRef = React.createRef();
  roastdateRef = React.createRef();
  tastedateRef = React.createRef();
  beverageRef = React.createRef();
  ratingRef = React.createRef();
  notebook = {};
  saveCoffee = e => {
    e.preventDefault();
    let coffee = {
      name: this.nameRef.current.value,
      origin: this.originRef.current.value,
      roaster: this.roasterRef.current.value,
      roastdate: this.roastdateRef.current.value,
      tastedate: this.tastedateRef.current.value,
      beverage: this.beverageRef.current.value,
      rating: this.ratingRef.current.value
    };
    this.notebook[Date.now()] = coffee;
    console.log(this.notebook);
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
        <label htmlFor="rating">Overall Rating</label>
        <input
          ref={this.ratingRef}
          type="range"
          min="0"
          max="5"
          id="tasteform-rating"
          className="rating"
          name="rating"
        />
        <div className="input-group number" id="tasteform-cupping">
          <label htmlFor="body" className="cupping-note body">
            Body
          </label>
          <input
            name="body"
            id="cupping-note-body"
            type="number"
            min="0"
            max="10"
          />
        </div>
        <div className="input-group number" id="tasteform-cupping">
          <label htmlFor="stone-fruit" className="cupping-note stone-fruit">
            Stone Fruit
          </label>
          <input
            name="stone-fruit"
            id="cupping-note-stone-fruit"
            type="number"
            min="0"
            max="10"
          />
        </div>
        <div className="input-group number" id="tasteform-cupping">
          <label htmlFor="XXX" className="cupping-note XXX">
            XXX
          </label>
          <input
            name="XXX"
            id="cupping-note-XXX"
            type="number"
            min="0"
            max="10"
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
