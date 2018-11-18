import React, { Component } from 'react';
import StarRating from './StarRating';
import RatingSlider from './RatingSlider';
import DateInput from './DateInput';
import './TastingForm.css';

class TastingForm extends Component {
  tastedateRef = React.createRef();
  roastdateRef = React.createRef();
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
      name: '',
      origin: '',
      roaster: '',
      beverage: '',
      roastdate: 0,
      tastedate: 0,
      rating: 0,
      notes: {
        body: 5,
        caramel: 5,
        chocolate: 5,
        stoneFruit: 5,
        xxx: 5,
      },
      comments: '',
    };
  }

  componentDidUpdate(prevProps) {
    console.log('old props:', prevProps);
    console.log('state:', this.state);
  }

  render() {
    const { name, origin, rating, roaster, notes, beverage, comments } = this.state;
    return (
      <form id="tastingForm" className="tasting" onSubmit={this.saveCoffee}>
        <header className="form-header">
          <h1 className="form-title">Coffee Notes</h1>
        </header>
        <p className="form-intro">fill out the form to keep track.</p>
        <DateInput
          ref={this.roastdateRef}
          placeholder="Roasted Date"
          id="tasteform-roasted-date"
          className="date small"
          name="roasted-date"
        />
        <DateInput
          ref={this.tastedateRef}
          placeholder="Tasted Date"
          id="tasteform-date"
          className="date small"
          name="tasted-date"
        />
        <div className="input-group rating" id="tasteform-cupping">
          <label htmlFor="rating">Overall Rating</label>
          <StarRating id="tasteform-rating" value={rating}
            onChange={event =>
              this.setState({
                rating: event.target.value,
              })
            } className="star rating" />
        </div>
        <div className="flex-container sliders">
          <RatingSlider value={notes.body} name="Body" id="cupping-note-body" />
          <RatingSlider value={notes.caramel} name="Caramel" id="cupping-note-caramel" />
          <RatingSlider value={notes.chocolate} name="Chocolate" id="cupping-note-chocolate" />
          <RatingSlider value={notes.stoneFruit} name="Stone Fruit" id="cupping-note-stone-fruit" />
          <RatingSlider value={notes.xxx} name="XXX" id="cupping-note-XXX" />
        </div>
        <input
          value={name}
          onChange={event =>
            this.setState({
              name: event.target.value,
            })
          }
          type="text"
          id="tasteform-name"
          className="name"
          name="name"
          placeholder="Coffee Name"
        />
        <input
          value={origin}
          onChange={event =>
            this.setState({
              origin: event.target.value,
            })
          }
          type="text"
          id="tasteform-origin"
          className="origin"
          name="origin"
          placeholder="Origin"
        />
        <input
          value={roaster}
          onChange={event =>
            this.setState({
              roaster: event.target.value,
            })
          }
          type="text"
          id="tasteform-roaster"
          className="roaster"
          name="roaster"
          placeholder="Roaster"
        />
        <input
          value={beverage}
          onChange={event => this.setState({ beverage: event.target.value })}
          type="text"
          id="tasteform-beverage"
          className="beverage"
          name="beverage"
          placeholder="Beverage"
        />
        <textarea
          value={comments}
          onChange={event => this.setState({ comments: event.target.value })}
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
