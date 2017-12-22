import React, { Component} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    // Bind onInputChange to this, reassign to self (e.g. x = x+1)
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault(); // Don't auto-submit the form on 'Enter'/'Submit'
  }

  render() {
    return (
      <form
        onSubmit={this.onFormSubmit}
        className="input-group">
        <input
          placeholder="Enter a city name"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange} />
        <span className="input-group-button">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}

export default SearchBar;
